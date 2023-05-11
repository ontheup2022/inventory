
<template>
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
          <v-text-field label="บริษััท" placeholder="" outlined></v-text-field>
        </v-col>

        <v-col cols="24" sm="12" md="6">
          <v-text-field label="หน่วย" placeholder="" outlined></v-text-field>
        </v-col>

        <v-col cols="24" sm="12" md="6">
          <v-text-field label="จำนวน" outlined></v-text-field>
        </v-col>

        <v-col cols="24" sm="12" md="6">
          <v-text-field label="ราคา/หน่วย" placeholder="" outlined></v-text-field>
        </v-col>
</v-row>


        <template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
      md="4"
    >
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
        <v-date-picker
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            variant="text"
            color="primary"
            @click="menu = false"
          >
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
    <v-col
      cols="12"
      sm="6"
      md="4"
    >
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
        <v-date-picker
          v-model="date"
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            variant="text"
            color="primary"
            @click="modal = false"
          >
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
    <v-col
      cols="12"
      sm="6"
      md="4"
    >
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
</template>



      <!-- </v-row> -->
      <h2 class="text-h7 mb-5">
        ยี่ห้อรถที่ใช้ได้
      </h2>

      <template>
  
    <v-toolbar
      flat
      color="deep-purple-accent-4"
      dark
    >
      <v-toolbar-title>Filter results</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <h3 class="text-h7 mb-5">
        เลือกยี่ห้อรถ
      </h3>

      <v-chip-group
      v-model="Brand"
        column
        multiple
        selected-class="text-primary"
      >
        <v-chip
          filter
          variant="outlined"
        >
          ทุกยี่ห้อ
        </v-chip>
        <v-chip
          filter
          variant="outlined"
        >
          Toyota
        </v-chip>
        <v-chip
          filter
          variant="outlined"
        >
          Isuzu
        </v-chip>
        <v-chip
          filter
          variant="outlined"
        >
          Honda
        </v-chip>
        <v-chip
          filter
          variant="outlined"
        >
          Mitsubishi
        </v-chip>
        <v-chip
          filter
          variant="outlined"
        >
          Nissan
        </v-chip>
        <v-chip
          filter
          variant="outlined"
        >
          Mazda
        </v-chip>
        <v-chip
          filter
          variant="outlined"
        >
          Ford
        </v-chip>
        <v-chip
          filter
          variant="outlined"
        >
        Chevrolet
        </v-chip>
        <v-chip
          filter
          variant="outlined"
        >
          Suzuki
        </v-chip>
        <v-chip
          filter
          variant="outlined"
        >
          MG
        </v-chip>
        <v-chip
          filter
          variant="outlined"
        >
          Volvo
        </v-chip>
        <v-chip
          filter
          variant="outlined"
        >
          BMW
        </v-chip>
        
      </v-chip-group>
    </v-card-text>

</template>



      <v-btn depressed color="primary"> ตกลง </v-btn>
      <v-btn depressed color="error"> ยกเลิก </v-btn>
    </v-container>
  </v-form>
</template>
    
    
    
  
  <script>
export default {
  name: "InspirePage",
};

data: () => ({
      Brand: [1],
    })

    
    
</script>

<script>
  export default {
    data: () => ({
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: true,
      modal: true,
      menu2: true,
    }),
  }
</script>