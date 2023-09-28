import React from 'react'
import { useTranslation } from 'react-i18next'
import PostList from './PostList'
function Contact () {
  const { t } = useTranslation()
  return (
    <div class='alert alert-success' role='alert'>
      <h1 class='display-1'>{t('page.welcome.contact')}</h1>

      <h1>{t('Welcome on page222')}</h1>
      <h1>{t('Merhaba, dünya!')}</h1>
      <h3>
        <a href='https://www.youtube.com/watch?v=2G5rfPISIwo'>
          {t('22Welcome on page2222')}
        </a>

        <div>
          <h1>
            {t(
              'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum? lorem lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum? lorem lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum? lorem lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum? lorem lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum? lorem '
            )}
          </h1>
        </div>
      </h3>
      <PostList />
    </div>
  )
}

export default Contact
