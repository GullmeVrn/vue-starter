import { createPinia } from 'pinia'

import App from '@/components/App'
import router from '@/router'

import '@/assets/tailwind.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
