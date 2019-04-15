import React from "react"
import { WithIntl } from "./src/i18n"

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <WithIntl {...props}>{element}</WithIntl>
}

export const onRenderBody = ({ setHeadComponents }) => {
  const stripeJs = (<script src="https://js.stripe.com/v3/" key="stripe-script" />)
  const googleMapJs = (<script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLEMAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`} key="stripe-script" />)

  setHeadComponents([
    stripeJs,
    googleMapJs,
  ])
}