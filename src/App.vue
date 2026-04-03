<template>
  <v-app>
    <!-- NAVBAR -->
    <v-app-bar
      color="white"
      :elevation="scrolled ? 4 : 0"
      :style="{ borderBottom: scrolled ? 'none' : '1px solid #e8e8e8' }"
    >
      <router-link to="/" class="logo-link ml-2">
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

        <v-list-item to="/hogyan-mukodunk" router>
          <v-list-item-title>{{ $t('nav.howItWorks') }}</v-list-item-title>
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
    <v-footer color="white" class="cv-footer">
      <v-container class="py-10">
        <v-row>

          <!-- Brand column -->
          <v-col cols="12" md="4" class="mb-6 mb-md-0">
            <img :src="logo" height="36" alt="Cégvándor logo" class="mb-4 d-block" />
            <p class="text-body-2 text-medium-emphasis">
              &copy; {{ new Date().getFullYear() }} Cégvándor –
              {{ $t('footer.rights') }}
            </p>
          </v-col>

          <!-- Nav links column -->
          <v-col cols="6" md="4" class="mb-6 mb-md-0">
            <p class="footer-heading mb-3">{{ $t('footer.nav.home') }}</p>
            <RouterLink to="/" class="footer-link d-block mb-2">
              {{ $t('footer.nav.home') }}
            </RouterLink>
            <RouterLink to="/hogyan-mukodunk" class="footer-link d-block mb-2">
              {{ $t('footer.nav.howItWorks') }}
            </RouterLink>
            <RouterLink to="/kapcsolat" class="footer-link d-block mb-2">
              {{ $t('footer.nav.contact') }}
            </RouterLink>
          </v-col>

          <!-- Contact column -->
          <v-col cols="6" md="4">
            <p class="footer-heading mb-3">{{ $t('nav.contact') }}</p>
            <a :href="`mailto:${$t('footer.email')}`" class="footer-link d-flex align-center mb-2">
              <v-icon size="16" class="mr-1">mdi-email-outline</v-icon>
              {{ $t('footer.email') }}
            </a>
            <a :href="`tel:${$t('footer.phone').replace(/\s/g, '')}`" class="footer-link d-flex align-center">
              <v-icon size="16" class="mr-1">mdi-phone-outline</v-icon>
              {{ $t('footer.phone') }}
            </a>
          </v-col>

        </v-row>

        <!-- Bottom bar -->
        <v-divider class="mt-8 mb-4" />
        <v-row align="center">
          <v-col cols="12" sm="6" class="text-center text-sm-left">
            <RouterLink to="/impresszum" class="footer-link text-caption">
              Impresszum
            </RouterLink>
          </v-col>
        </v-row>

      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { i18n } from '@/i18n'
import logo from '@/assets/logotran2.png'

function setLanguage(lang: 'hu' | 'en') {
  i18n.global.locale.value = lang
}

const drawer = ref(false)

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 10
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.logo-link {
  display: flex;
  align-items: center;
}

.cv-footer {
  border-top: 1px solid #e8e8e8;
}

.footer-heading {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(0, 0, 0, 0.45);
}

.footer-link {
  color: rgba(0, 0, 0, 0.65);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #22288d;
}
</style>
