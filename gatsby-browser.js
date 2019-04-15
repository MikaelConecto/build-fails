import React from 'react'

const noAuthPages = [
  '',
  '404',
  'sign-up',
  'password-reset',
  'confirmation',
  'en',
  'en/404',
  'en/sign-up',
  'en/password-reset',
  'en/confirmation',
]

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  if (noAuthPages.indexOf(props['*']) === -1) {
    return (
      <WithAuthPage initializer={AmplifyConfigs} redirectTo="/" {...props}>
        {element}
      </WithAuthPage>
    )
  } else {
    return <WithIntl {...props}>{element}</WithIntl>
  }
}