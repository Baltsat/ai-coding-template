module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer', // Analyzes commits to determine next version
    '@semantic-release/release-notes-generator', // Generates release notes
    [
      '@semantic-release/changelog', // Updates the CHANGELOG.md file
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/npm', // Updates package.json version
      {
        npmPublish: false, // Don't publish to npm
      },
    ],
    [
      '@semantic-release/git', // Commits changes back to git
      {
        assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
