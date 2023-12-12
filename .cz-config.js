module.exports = {
  types: [
    {
      value: ':sparkles: feat',
      name: '✨ feat:\tAdding a new feature (e.g., user login)"',
    },
    {
      value: ':wrench: fix',
      name: '🔧 fix:\tFixing a bug (e.g., page not loading fixed)',
    },
    {
      value: ':memo: docs',
      name: '📝 docs:\tAdd or update documentation (e.g., README update)',
    },
    {
      value: ':art: style',
      name: '🎨 style:\tAdd or update styles, UI, or UX (e.g., new color scheme)',
    },
    {
      value: ':recycle: refactor',
      name: '♻️  refactor:\tCode change with no new features or bug fixes (e.g., button component restructuring)',
    },
    {
      value: ':zap: perf',
      name: '⚡️ perf:\tCode change that improves performance (e.g., optimized algorithm)',
    },
    {
      value: ':test_tube: test',
      name: '🧪 test:\tAdding test cases (e.g., unit tests for authentication)',
    },
    {
      value: ':truck: chore',
      name: '🚚 chore:\tChanges to the build process or auxiliary tools (e.g., update dependencies)',
    },
    {
      value: ':rewind: revert',
      name: '⏪️ revert:\tRevert to a previous commit (e.g., undo last feature)t',
    },
    {
      value: ':construction: wip',
      name: '🚧 wip:\tWork in progress (e.g., ongoing refactoring)',
    },
    {
      value: ':construction_worker: build',
      name: '👷 build:\tAdd or update regards to the build process (e.g., configure webpack)',
    },
    {
      value: ':green_heart: ci',
      name: '💚 ci:\tAdd or update regards to the continuous integration (CI) process (e.g., configure Travis CI)',
    },
  ],

  scopes: [{ name: 'config' }, { name: 'tailwind' }],
  allowCustomScopes: true,
  allowEmptyScopes: true,
  subjectLimit: 100,
};
