'use strict';

const Yeoman = require('yeoman-generator');
const path = require('path');
const mkdirp = require('mkdirp');
const glob = require('glob');

module.exports = class extends Yeoman {

  prompting() {
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
        message: 'Who wrote it?'
      },
      {
        type: 'input',
        name: 'github',
        required: true,
        message: 'What GitHub org will it live in?'
      }
    ]).then(function (answers) {
      this.props = answers;
      done();
    }.bind(this));
  }

  default() {
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
  }

  writing() {
    // Write & rename element src
    this.fs.copyTpl(
      this.templatePath('element.html'),
      this.destinationPath('src/' + this.props.name + '.html'),
      this
    );

    // Write & rename element test
+   this.fs.copyTpl(
      this.templatePath('element-test.html'),
      this.destinationPath('test/' + this.props.name + '.html'),
      this
    );

    // Write everything else
    this.fs.copyTpl(
      glob.sync(this.templatePath('!(element.html|element-test.html|gulpfile.babel.js)'), { dot: true }),
      this.destinationPath(),
      this
    );

    // Write gulpfile separately, since it uses ejs internally
    this.fs.copy(
      this.templatePath('gulpfile.babel.js'),
      this.destinationPath('gulpfile.babel.js')
    );
  }

  install() {
    this.installDependencies();
  }
};
