'use strict';

var yeoman = require('yeoman-generator'),
    path = require('path'),
    mkdirp = require('mkdirp'),
    glob = require('glob');

module.exports = yeoman.Base.extend({

  prompting: function() {
    var done = this.async();

    return this.prompt([
      {
        type: 'input',
        name: 'name',
        required: true,
        message: 'Give it a tag name (min two words separated by dashes)',
        validate: function(str) {
          return /^([a-z])(?!.*[<>])(?=.*-).+$/.test(str);
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Tell me all about it...'
      },
      {
        type: 'input',
        name: 'author',
        required: true,
        message: 'Who wrote it?',
        store: true
      },
      {
        type: 'input',
        name: 'github',
        required: true,
        message: 'What GitHub org will it live in?',
        store: true
      }
    ]).then(function (answers) {
      this.props = answers;
      done();
    }.bind(this));
  },

  default: function () {
    // Check directory
    if (path.basename(this.destinationPath()) !== this.props.name) {
      this.log(
        'Your component should be inside a folder named ' + this.props.name + '\n' +
        'I\'ll automatically create this folder.'
      );
      mkdirp(this.props.name);
      this.destinationRoot(this.destinationPath(this.props.name));
    }

    // Build component class
    this.props.class = this.props.name.split('-').reduce(function(previous, part) {
      return previous + part.charAt(0).toUpperCase() + part.slice(1);
    }, '');
  },

  writing: function() {
    // Write & rename element src
    this.fs.copyTpl(
      this.templatePath('src/element.html'),
      this.destinationPath('src/' + this.props.name + '.html'),
      this
    );

    // Write everything else
    this.fs.copyTpl(
      glob.sync(this.templatePath('!(element.html|gulpfile.babel.js)'), { dot: true }),
      this.destinationPath(),
      this
    );

    // Write gulpfile separately, since it uses ejs internally
    this.fs.copy(
      this.templatePath('gulpfile.babel.js'),
      this.destinationPath('gulpfile.babel.js')
    );
  },

  install: function() {
    this.installDependencies();
  }
});
