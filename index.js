const { Toolkit } = require('actions-toolkit')

// Run your GitHub Action!
Toolkit.run(async tools => {

  try {
    const pullRequest = tools.context.payload

    tools.log.success(pullRequest)
    tools.exit.success("Action is complete")
  } catch (err) {
    // Log the error message
    tools.log.error(`An error occurred while looking at the pr`)
    tools.log.error(err)

    // The error might have more details
    if (err.errors) tools.log.error(err.errors)

    // Exit with a failing status
    tools.exit.failure()
  }

  tools.exit.success('We did it!')
}, {
  secrets: ['GITHUB_TOKEN']
})
