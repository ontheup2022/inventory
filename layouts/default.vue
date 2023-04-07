<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
      <!-- <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <v-toolbar-title>Inventory Autoparts</v-toolbar-title>
      <v-spacer />
      <div class="text-center">
        <v-btn
          class="ma-2"
          :loading="loading2"
          :disabled="loading2"
          color="blue-grey"
          to="/test"
          @click="loader = 'loading2'"
        >
          เพิ่มรายชื่อ
          <template v-slot:loader>
            <span>Loading...</span>
          </template>
        </v-btn>
      </div>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "เมนู",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "ข้อมูลอะไหล่ยนต์",
          to: "/autoparts",
        },
        {
          icon: "mdi-chart-bubble",
          title: "ข้อมูลพนักงาน",
          to: "/employee",
        },
        {
          icon: "mdi-chart-bubble",
          title: "เบิกอะไหล่",
          to: "/test",
        },
        {
          icon: "mdi-chart-bubble",
          title: "ลดรายชื่อ",
          to: "/test",
        },
        {
          icon: "mdi-chart-bubble",
          title: "สั่งซื้ออะไหล่",
          to: "/outbook",
        },
        {
          icon: "mdi-chart-bubble",
          title: "สรุปรายงาน",
          to: "/outbook",
        },
        {
          icon: "mdi-chart-bubble",
          title: "การแจ้งเตือน",
          to: "/outbook",
        },
        {
          icon: "mdi-chart-bubble",
          title: "ออกจากระบบ",
          to: "/outbook",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "ระบบยืม-คืนหนังสือ",
    };
  },
};
</script>
