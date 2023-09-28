import React, { createContext, useContext, useState } from 'react'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslations from './locales/en/translation.json'
import frTranslations from './locales/fr/translation.json'
import trTranslations from './locales/tr/translation.json'

// Create a language context
const LanguageContext = createContext()

// Create a custom component to use with the language context
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en') // Default language is English

  const changeLanguage = newLanguage => {
    setLanguage(newLanguage)
    // Create the appropriate domain for the new language
    const domain = window.location.host
    const newUrl = `http://${domain}/${newLanguage}`
    window.history.pushState({}, document.title, newUrl)
    window.location.reload()
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Create a custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error(
      'The useLanguage hook must be used within a LanguageProvider.'
    )
  }
  return context
}
