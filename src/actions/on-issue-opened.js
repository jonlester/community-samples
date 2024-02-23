

/**
 * Creates a content file from the an issue.
 * Opens a new PR
 *
 * @async
 * @param {import('github-script').AsyncFunctionArguments} AsyncFunctionArguments param0
 * github - A pre-authenticated octokit/rest.js client with pagination plugins see: https://octokit.github.io/rest.js/v20
 * context - An object containing the context of the workflow run
 * core - A reference to the @actions/core package
 * glob - The glob object to interact with GitHub Actions' glob library.
 * io -  A reference to the @actions/io package
 * exec - A reference to the @actions/exec package
 * require - require A proxy wrapper around the normal Node.js require to enable requiring cwd relative paths 
 * @throws {Error} If there is an error fetching the commit or exporting the variable.
 * @returns {Promise<void>} A Promise that resolves when the function has completed.
*/
// @ts-check
module.exports = async ({github, context, core, glob, io, exec, require}) => {
  const {SHA} = process.env;
  const parsedBody = core.getInput('issue-body', { required: true });
  // @ts-ignore - the injected require wrapper uses root-relative paths
  const issue = await github.rest.issues.get({...context.issue, issue_number: context.issue.number});

  console.log(`Issue: ${JSON.stringify(issue.data)}`);
  console.log(`body: ${parsedBody}`);
  //core.exportVariable('body', issue.data.body);
}