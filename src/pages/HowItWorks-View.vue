<template>
    <!-- PAGE HEADER -->
    <section class="page-header">
      <v-container class="py-16 text-center">
        <h1>Hogyan működik</h1>
        <p class="subtitle mt-4">
          Egyszerű folyamat, teljes körű szállásmegoldás vállalatok számára.
        </p>
      </v-container>
    </section>

    <!-- STEPS -->
    <section class="steps">
      <v-container class="py-16">
        <v-row>
          <v-col cols="12" md="6" class="step">
            <h3>1. Igény megküldése</h3>
            <p>
              Ön megadja a várost vagy régiót, az elhelyezés időtartamát,
              a munkavállalók létszámát, valamint az esetleges speciális igényeket.
            </p>
          </v-col>

          <v-col cols="12" md="6" class="step">
            <h3>2. Ajánlatok készítése</h3>
            <p>
              Az igények alapján legalább két különböző szállásajánlatot készítünk,
              amelyek árban, elhelyezkedésben vagy komfortfokozatban is eltérhetnek.
            </p>
          </v-col>

          <v-col cols="12" md="6" class="step">
            <h3>3. Választás</h3>
            <p>
              Ön kiválasztja az Önnek legmegfelelőbb megoldást,
              mi pedig elindítjuk a szervezést.
            </p>
          </v-col>

          <v-col cols="12" md="6" class="step">
            <h3>4. Teljes körű ügyintézés</h3>
            <p>
              A szervezést teljes egészében átvállaljuk — kapcsolattartás,
              adminisztráció, egyeztetések és változások kezelése.
            </p>
          </v-col>

          <v-col cols="12" md="6" class="step">
            <h3>5. Egyszerű elszámolás</h3>
            <p>
              A díjazás havonta vagy kéthetente, egy összesített számla alapján
              történik, külön ügyintézés nélkül.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- WHY PARTNER -->
    <section class="why">
      <v-container class="py-16">
        <v-row>
          <v-col cols="12" class="text-center mb-12">
            <h2>Miért éri meg velünk dolgozni?</h2>
          </v-col>

          <v-col cols="12" md="4">
            <h4>Időmegtakarítás</h4>
            <p>
              Egyetlen partneren keresztül intézhet minden szállással kapcsolatos
              feladatot.
            </p>
          </v-col>

          <v-col cols="12" md="4">
            <h4>Rugalmas megoldások</h4>
            <p>
              Minden projektet az aktuális igényekhez igazítunk,
              létszám és időtartam szerint.
            </p>
          </v-col>

          <v-col cols="12" md="4">
            <h4>Átlátható elszámolás</h4>
            <p>
              Egy számla, kiszámítható fizetés, rejtett költségek nélkül.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CTA -->
    <section class="cta">
      <v-container class="py-16 text-center">
        <h2>Készen áll az együttműködésre?</h2>
        <v-btn
          color="primary"
          size="large"
          to="/kapcsolat"
        >
          Lépjen kapcsolatba velünk
        </v-btn>
      </v-container>
    </section>
</template>

<script setup>
// no logic needed
</script>

<style scoped>
.page-header {
  background: rgb(var(--v-theme-surface));
}

.subtitle {
  color: rgba(0, 0, 0, 0.65);
  font-size: 1.1rem;
}

.step h3 {
  margin-bottom: 0.5rem;
}

.why {
  background: white;
}

.cta {
  background: rgb(var(--v-theme-background));
}
</style>
