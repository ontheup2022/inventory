<template>
  <v-form>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="24" sm="12" md="6">
            <v-text-field label="ประเภทอะไหล่" outlined></v-text-field>
          </v-col>

          <v-col cols="24" sm="12" md="6">
            <v-text-field label="ยี่ห้ออะไหล่" outlined></v-text-field>
          </v-col>

          <v-col cols="24" sm="12" md="6">
            <v-text-field label="บริษัท" placeholder="" outlined></v-text-field>
          </v-col>

          <v-col cols="24" sm="12" md="6">
            <v-text-field label="หน่วย" placeholder="" outlined></v-text-field>
          </v-col>

          <v-col cols="24" sm="12" md="6">
            <v-text-field label="จำนวน" outlined></v-text-field>
          </v-col>

          <v-col cols="24" sm="12" md="6">
            <v-text-field
              label="ราคา/หน่วย"
              placeholder=""
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <!-- <template> -->
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-menu
            ref="menu"
            v-model="menu"
            v-model:return-value="date"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Picker in menu"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn variant="text" color="primary" @click="menu = false">
                Cancel
              </v-btn>
              <v-btn
                variant="text"
                color="primary"
                @click="$refs.menu.save(date)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" sm="6" md="4">
          <v-dialog
            ref="dialog"
            v-model="modal"
            v-model:return-value="date"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Picker in dialog"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" scrollable>
              <v-spacer></v-spacer>
              <v-btn variant="text" color="primary" @click="modal = false">
                Cancel
              </v-btn>
              <v-btn
                variant="text"
                color="primary"
                @click="$refs.dialog.save(date)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Picker without buttons"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              @input="menu2 = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>

    <!-- <div class="text-center">
      
    </div> -->

    <v-container>
      <div class="text-center">
        <v-bottom-sheet v-model="sheet" persistent>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="green" dark v-bind="attrs" v-on="on"> ตกลง </v-btn>
          </template>
          <v-sheet class="text-center" height="200px">
            <v-btn
              class="mt-6"
              text
              color="green"
              @click="sheet = !sheet"
              to="/buyautoparts"
            >
              กลับไปหน้าอะไหล่ยนต์
            </v-btn>
            <div class="py-3">บันทึกในรายการอะไหล่ยนต์แล้ว</div>
          </v-sheet>
        </v-bottom-sheet>
        <v-btn depressed color="error" to="/buyautoparts"> ยกเลิก </v-btn>
      </div>
    </v-container>
  </v-form>
</template>
    
    
    
  
<script>
export default {
  name: "InspirePage",
};

data: () => ({
  Brand: [1],
});
</script>

<script>
export default {
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: true,
    modal: true,
    menu2: true,
  }),
};
</script>

<script>
export default {
  methods: {
    close() {
      alert("Chip close clicked");
    },
  },
};
</script>