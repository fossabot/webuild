/**
 * Created by axetroy on 2017/7/2.
 */
const Builder = require('../Builder');

class FileBuilder extends Builder {
  constructor() {
    super();
    this.name = 'file';
  }
}

module.exports = FileBuilder;
