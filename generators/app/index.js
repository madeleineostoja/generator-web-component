'use strict';

var yeoman = require('yeoman-generator'),
    chalk = require('chalk'),
    yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

  prompting: function () {
    var done = this.async(),
        prompts;

    this.log(yosay(
      'Welcome to the smashing ' + chalk.red('Polymer element') + ' generator!'
    ));

    prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Give your element a name'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Tell me all about it...'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Who wrote it?',
        default: 'Sean King <sean@seanking.org>'
      },
      {
        type: 'input',
        name: 'github',
        message: 'What GitHub org will it live in?',
        default: 'seaneking'
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;

      done();
    }.bind(this));
  },

  writing: {
    build: function () {
      this.fs.copyTpl(
        this.templatePath('src/element.html'),
        this.destinationPath('src/' + this.props.name + '.html'),
        this
      );

      this.directory('.', '.');
    },
    // HACK
    clean: function() {
      this.fs.delete('./src/element.html');
    }
  }
});
