<template>
  <v-app>
    <!-- NAVBAR -->
    <v-app-bar flat
               elevation="1"
               color="white"
               floating>
      <v-toolbar-title class="text-h6 font-weight-bold">
        <router-link to="/" class="home-link">
          Cégvándor
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text @click="setLanguage('hu')">HU</v-btn>
      <v-btn text @click="setLanguage('en')">EN</v-btn>
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- NAVIGATION DRAWER -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
      width="250"
    >
      <v-list>
        <v-list-item to="/" router>
          <v-list-item-title>{{ $t('nav.home')}}</v-list-item-title>
        </v-list-item>

        <v-list-item to="/kapcsolat" router>
          <v-list-item-title>{{ $t('nav.contact')}}</v-list-item-title>
        </v-list-item>

        <v-list-item to="/login" router>
          <v-list-item-title>{{ $t('nav.login')}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- MAIN CONTENT -->
    <v-main>
      <router-view />
    </v-main>

    <!-- FOOTER -->
    <v-footer color="grey-lighten-4" padless>
      <v-container class="text-center py-6">
        <p class="text-caption">&copy; {{ new Date().getFullYear() }} Cégvándor – {{ $t('footer.rights')}}</p>
        <RouterLink
          to="/impresszum"
          class="text-decoration-none text-medium-emphasis"
        >
          Impresszum
        </RouterLink>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { i18n } from '@/i18n'

function setLanguage(lang: 'hu' | 'en') {
  i18n.global.locale.value = lang
}

// Drawer open/close state
const drawer = ref(false)
</script>

<style scoped>
.home-link {
  color: inherit;          /* match toolbar text color */
  text-decoration: none;   /* remove underline */
  cursor: pointer;         /* show pointer on hover */
}
</style>
