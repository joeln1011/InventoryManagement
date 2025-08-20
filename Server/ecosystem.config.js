module.exports = {
  apps: [
    {
      name: 'InventoryManagement',
      script: 'npm',
      args: 'run dev',
      env: {
        NODE_ENV: 'development',
        ENV_VAR1: 'environment-variable',
      },
    },
  ],
};
