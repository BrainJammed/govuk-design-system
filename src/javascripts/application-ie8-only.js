import CookieBanner from './components/cookie-banner.js'
import Example from './components/example.js'
import Tabs from './components/tabs.js'
import MobileNav from './components/mobile-navigation.js'

// Add cookie message
CookieBanner.addCookieMessage()

// Initialise example frames
Example.init('.js-example__frame')

// Initialise tabs
Tabs.init('.js-example')

// Initialise mobile navigation
MobileNav.init()
