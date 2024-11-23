import type { Config } from 'jest';

const jestPuppeteerConfig = async (): Promise<Config> => {
    return {
        verbose: true,
    };
};

export default jestPuppeteerConfig;