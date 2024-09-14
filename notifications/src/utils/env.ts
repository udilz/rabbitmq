import {cleanEnv, str} from 'envalid';

export const env = cleanEnv(process.env, {
    RABBITMQ_URI: str(),
})