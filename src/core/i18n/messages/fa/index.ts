import auth from './auth.json'
import common from './common.json'
import landing from './landing.json'
import videoDetails from './video-details.json'

export const defaultFaMessages = {
  ...common,
  ...auth,
  ...videoDetails,
  ...landing,
}

export type AppMessages = typeof defaultFaMessages
