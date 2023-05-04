<template>
  <v-form>
    <v-container>
      <v-row>
        

        <v-col cols="24" sm="12" md="6">
          <v-text-field label="ยี่ห้ออะไหล่" outlined></v-text-field>
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
          mitsubishi
        </v-chip>
        <v-chip
          filter
          variant="outlined"
        >
          nissan
        </v-chip>
        <v-chip
          filter
          variant="outlined"
        >
          mazda
        </v-chip>
        <v-chip
          filter
          variant="outlined"
        >
          ford
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
          Suzuki
        </v-chip>
        <v-chip
          filter
          variant="outlined"
        >
          nissan
        </v-chip>
        <v-chip
          filter
          variant="outlined"
        >
          nissan
        </v-chip>
        <v-chip
          filter
          variant="outlined"
        >
          nissan
        </v-chip>
        <v-chip
          filter
          variant="outlined"
        >
          nissan
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
  
  
  