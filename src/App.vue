<template>
  <v-app>
    <!-- NAVBAR -->
    <v-app-bar flat
               elevation="1"
               color="white"
               floating>
      <router-link to="/" class="logo-link">
        <img
          :src="logo"
          height="40"
          alt="Company logo"
          style="cursor:pointer"
        />
      </router-link>

      <v-spacer></v-spacer>

      <!-- Language selector (globe) -->
      <v-menu location="bottom end">
        <template #activator="{ props }">
          <v-btn
            icon
            variant="text"
            v-bind="props"
            aria-label="Change language"
          >
            <v-icon>mdi-earth</v-icon>
          </v-btn>
        </template>

        <v-list density="compact" min-width="150">
          <v-list-item @click="setLanguage('hu')">
            <v-list-item-title>🇭🇺 Magyar</v-list-item-title>
          </v-list-item>
          <v-list-item @click="setLanguage('en')">
            <v-list-item-title>🇬🇧 English</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
          <v-list-item-title>{{ $t('nav.home') }}</v-list-item-title>
        </v-list-item>

        <v-list-item to="/kapcsolat" router>
          <v-list-item-title>{{ $t('nav.contact') }}</v-list-item-title>
        </v-list-item>

        <v-list-item to="/login" router>
          <v-list-item-title>{{ $t('nav.login') }}</v-list-item-title>
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
        <p class="text-caption">&copy; {{ new Date().getFullYear() }} Cégvándor –
          {{ $t('footer.rights') }}</p>
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import logo from '@/assets/logotran2.png'
const drawer = ref(false)
</script>

<style scoped>
.logo-link:hover {
  background: transparent !important;
}
</style>
