

/**
 * Creates a content file from the an issue.
 * Opens a new PR
 *
 * @async
 * @param {Object} param0.github - A pre-authenticated octokit/rest.js client with pagination plugins see: https://octokit.github.io/rest.js/v20
 * @param {Object} param0.context - An object containing the context of the workflow run
 * @param {Object} param0.core - A reference to the @actions/core package
 * @param {Object} param0.glob - The glob object to interact with GitHub Actions' glob library.
 * @param {Object} param0.io -  A reference to the @actions/io package
 * @param {Object} param0.exec - A reference to the @actions/exec package
 * @param {Object} param0.require - require A proxy wrapper around the normal Node.js require to enable requiring cwd relative paths 
 * @throws {Error} If there is an error fetching the commit or exporting the variable.
 * @returns {Promise<void>} A Promise that resolves when the function has completed.
*/
module.exports = async ({github, context, core, glob, io, exec, require}) => {
  const {SHA} = process.env;
  const issue = await github.rest.issues.get(context.issue());
  console.log(`Issue: ${JSON.stringify(issue)}`);
  core.exportVariable('body', issue.data.body);
}