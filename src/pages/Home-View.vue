<template>
    <!-- HERO SECTION -->
    <section class="hero">
      <v-container class="py-16">
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">

            <img
              src="/src/assets/logoonlytext.png"
              alt="Logo"
              class="hero-logo mb-6"
            />
            <h1 class="hero-title">
              {{ t('home.title')}}
            </h1>

            <p class="hero-subtitle mt-6">
              {{ t('home.subtitle')}}
            </p>

            <div class="hero-actions mt-10">
              <v-btn
                color="primary"
                size="large"
                to="/hogyan-mukodunk"
              >
                {{t('home.letUsHandleIt')}}
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- WHY SECTION -->
    <section class="why">
      <v-container class="py-16">
        <v-row>
          <v-col cols="12" class="text-center mb-12">
            <h2 class="font-weight-bold">{{ t('home.whyChooseUs')}}</h2>
          </v-col>

          <v-col cols="12" md="4">
            <h3 class="font-weight-bold">{{t('home.features.custom.title')}}</h3>
            <p>
              {{ t('home.features.custom.text')}}
            </p>
          </v-col>

          <v-col cols="12" md="4">
            <h3 class="font-weight-bold"> {{t('home.features.global.title')}}</h3>
            <p>
              {{ t('home.features.global.text')}}
            </p>
          </v-col>

          <v-col cols="12" md="4">
            <h3 class="font-weight-bold">{{t('home.features.reliable.title')}}</h3>
            <p>
              {{t('home.features.reliable.text')}}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CLOSING SECTION -->
    <section class="closing">
      <v-container class="py-16">
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <p class="closing-text">
              {{t('home.outro')}}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.hero {
  background: rgb(var(--v-theme-surface));
}

.hero-title {
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.7);
}

.why {
  background: white;
}

.why h3 {
  margin-bottom: 0.5rem;
}

.closing {
  background: rgb(var(--v-theme-background));
}

.closing-text {
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.7);
}

.hero-logo {
  max-width: 420px;
  height: auto;
}
</style>
