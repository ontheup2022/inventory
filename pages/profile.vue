<template>
  <v-card class="mx-auto" max-width="800" tile>
    <v-img
      height="100%"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    ></v-img>
    <v-col>
      <v-avatar size="100" style="position: absolute; top: 80px">
        <v-img
          src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
        ></v-img>
      </v-avatar>
    </v-col>
    <v-list-item color="rgba(0, 0, 0, .4)">
      <v-list-item-content>
        <v-list-item-title class="title">Akanit Innunchai</v-list-item-title>
        <v-list-item-subtitle>Admin</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <!-- <div class="text-left" id="box1">
      <v-bottom-sheet v-model="sheet" inset>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="orange" dark v-bind="attrs" v-on="on">
            O
          </v-btn>
        </template>
        <v-sheet class="text-center" height="200px">
          <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
            close
          </v-btn>
          <div class="my-3">This is a bottom sheet using the inset prop</div>
        </v-sheet>
      </v-bottom-sheet>
    </div> -->

    <!-- <div class="text-center" id="box1">
      <v-bottom-sheet v-model="sheet" inset>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="orange" dark v-bind="attrs" v-on="on">
            a
          </v-btn>
        </template>
        <v-sheet class="text-center" height="200px">
          <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
            close
          </v-btn>
          <div class="my-3">This is a bottom sheet using the inset prop</div>
        </v-sheet>
      </v-bottom-sheet>
    </div> -->

    <!-- <div class="text-right" id="box3">
      <v-bottom-sheet v-model="sheet" inset>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="orange" dark v-bind="attrs" v-on="on">
            c
          </v-btn>
        </template>
        <v-sheet class="text-center" height="200px">
          <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
            close
          </v-btn>
          <div class="my-3">This is a bottom sheet using the inset prop</div>
        </v-sheet>
      </v-bottom-sheet>
    </div> -->

    <!-- <div class="text-right" id="box2">
      <v-bottom-sheet v-model="sheet" inset>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="orange" dark v-bind="attrs" v-on="on">
            Log out
          </v-btn>
        </template>
        <v-sheet class="text-center" height="200px">
          <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
            close
          </v-btn>
          <div class="my-3">This is a bottom sheet using the inset prop</div>
        </v-sheet>
      </v-bottom-sheet>
    </div> -->

    <div class="text-right" id="box1">
      <v-btn color="info" class="mr-4" to="employeehomeinbox">
        รายชื่อพนักงาน
      </v-btn>

      <v-btn color="info" class="mr-4" to="notifications">
        จัดการการเบิก
      </v-btn>

      <v-btn color="warning" class="mr-4" @click="resetValidation">
        ข้อความรายงานปัญหา
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> ออกจากระบบ </v-btn>
    </div>
  </v-card>
</template>

<!-- <script>
// export default {
//   data: () => ({
//     sheet: false,
//   }),
// };
</script> -->
<script>
export default {
  name: "IndexPage",
};
</script>