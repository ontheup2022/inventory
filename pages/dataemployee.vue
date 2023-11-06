<template>
  <v-col>
    <v-text-field
      label="Search"
      placeholder=""
      class="mdi mdi-magnify"
      filled
      rounded
      dense
    >
    </v-text-field>

    <v-btn
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click="loader = 'loading2'"
      to="/addemployee"
    >
      เพิ่มพนักงาน
    </v-btn>
    <v-data-table
      :headers="headers"
      :items="theemployee"
      :items-per-page="4"
      class="elevation-1"
    >
    </v-data-table>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "No.",
          align: "numberemploy",
          sortable: false,
          value: "name",
        },
        { text: "หมายเลขพนักงาน", value: "number" },
        { text: "ชื่อ-นามสกุล", value: "nameemployee" },
        { text: "เบอร์โทรศัพท์", value: "telemployee" },
      ],
      theemployee: [
        {
          name: "1",
          number: "00031",
          nameemployee: "ธนาธร จึงรุ่งเรืองกิจ",
          telemployee: "08046289xx",
        },
        {
          name: "2",
          number: "00032",
          nameemployee: "พิธา ลิ้มเจริญรัตน์",
          telemployee: "08057924xx",
        },
        {
          name: "3",
          number: "00033",
          nameemployee: "รังสิมันต์ โรม",
          telemployee: "08025496xx",
        },

        {
          name: "4",
          number: "00034",
          nameemployee: "วิโรจน์ ลักขณาอดิศร",
          telemployee: "080754992xx",
        },
      ],
    };
  },
};
</script>

