/**
 * Module reprezent a contstant base directory path.
 * 
 * @authod wickd
 */

let _basedir;

/** setter base dir path */
exports.set = path => _basedir = path;

/** getter base dir path */
exports.get = _basedir;