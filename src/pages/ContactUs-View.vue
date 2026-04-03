<template>
  <!-- CONTACT HERO -->
  <section class="contact-hero">
    <v-container class="py-16">
      <v-row justify="center">
        <v-col cols="12" md="7" class="text-center">
          <h1 class="contact-title mb-4">{{ t('contactus.title') }}</h1>
          <p class="contact-intro mb-2">{{ t('contactus.intro') }}</p>
          <p class="contact-response-time">{{ t('contactus.responseTime') }}</p>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <!-- CONTACT CARDS -->
  <section class="contact-cards">
    <v-container class="pb-16">
      <v-row justify="center" class="ga-6">

        <v-col cols="12" sm="5" md="4">
          <v-card class="contact-card" elevation="0">
            <v-card-text class="pa-8 text-center">
              <div class="contact-icon-wrap mb-5">
                <v-icon color="primary" size="28">mdi-email-outline</v-icon>
              </div>
              <p class="contact-card-label mb-4">E-mail</p>
              <v-btn
                variant="outlined"
                color="primary"
                rounded="lg"
                href="mailto:info@cegvandor.hu"
                class="text-none"
              >
                info@cegvandor.hu
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="5" md="4">
          <v-card class="contact-card" elevation="0">
            <v-card-text class="pa-8 text-center">
              <div class="contact-icon-wrap mb-5">
                <v-icon color="primary" size="28">mdi-phone-outline</v-icon>
              </div>
              <p class="contact-card-label mb-4">{{ t('contactus.phone') }}</p>
              <v-btn
                variant="outlined"
                color="primary"
                rounded="lg"
                href="tel:+36302355615"
                class="text-none"
              >
                +36 30 235 5615
              </v-btn>
            </v-card-text>
          </v-card>
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
.contact-hero {
  background: #f8f9fe;
}

.contact-title {
  font-size: 2.4rem;
  font-weight: 700;
  color: #111827;
}

.contact-intro {
  font-size: 1.05rem;
  color: rgba(0, 0, 0, 0.65);
  line-height: 1.7;
  max-width: 500px;
  margin: 0 auto;
}

.contact-response-time {
  font-size: 0.9rem;
  color: #22288d;
  font-weight: 500;
  margin-top: 6px;
}

.contact-cards {
  background: #ffffff;
}

.contact-card {
  border: 1px solid #e8eaf6;
  border-radius: 16px !important;
  background: #ffffff;
  height: 100%;
}

.contact-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: #eef0fb;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.contact-card-label {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(0, 0, 0, 0.45);
}
</style>
