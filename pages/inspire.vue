
<template>

  
  <v-data-table

    dense
    :headers="headers"
    :items="desserts"
    item-key="name"
    class="elevation-1"
  >
  
</v-data-table>
  </template>
  
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

<script>
export default {
  name: 'InspirePage'
}


</script>



<script>
  export default {
    data: () => ({
      desserts: [
        // {
        //   name: 'Frozen Yogurt',
        //   calories: 159,
        //   fat: 6.0,
        //   carbs: 24,
        //   protein: 4.0,
        //   iron: '1%',
        // },
        // {
        //   name: 'Ice cream sandwich',
        //   calories: 237,
        //   fat: 9.0,
        //   carbs: 37,
        //   protein: 4.3,
        //   iron: '1%',
        // },
        // {
        //   name: 'Eclair',
        //   calories: 262,
        //   fat: 16.0,
        //   carbs: 23,
        //   protein: 6.0,
        //   iron: '7%',
        // },
        // {
        //   name: 'Cupcake',
        //   calories: 305,
        //   fat: 3.7,
        //   carbs: 67,
        //   protein: 4.3,
        //   iron: '8%',
        // },
        // {
        //   name: 'Gingerbread',
        //   calories: 356,
        //   fat: 16.0,
        //   carbs: 49,
        //   protein: 3.9,
        //   iron: '16%',
        // },
        // {
        //   name: 'Jelly bean',
        //   calories: 375,
        //   fat: 0.0,
        //   carbs: 94,
        //   protein: 0.0,
        //   iron: '0%',
        // },
        // {
        //   name: 'Lollipop',
        //   calories: 392,
        //   fat: 0.2,
        //   carbs: 98,
        //   protein: 0,
        //   iron: '2%',
        // },
        // {
        //   name: 'Honeycomb',
        //   calories: 408,
        //   fat: 3.2,
        //   carbs: 87,
        //   protein: 6.5,
        //   iron: '45%',
        // },
        // {
        //   name: 'Donut',
        //   calories: 452,
        //   fat: 25.0,
        //   carbs: 51,
        //   protein: 4.9,
        //   iron: '22%',
        // },
        // {
        //   name: 'KitKat',
        //   calories: 518,
        //   fat: 26.0,
        //   carbs: 65,
        //   protein: 7,
        //   iron: '6%',
        // },
      ],
      headers: [
        {
          text: 'วันที่ยืม',
            align: 'start',
            sortable: false,
            value: 'dayout',
        },
        { text: 'ชื่อ-นามสกุล', value: 'namecustomer' },
        { text: 'ชื่อหนังสื่อ', value: 'book' },
        { text: 'วันที่คืน', value: 'dayin' },
        { text: 'ผู้รับ', value: 'keepit' },
        { text: 'เลือก', value: 'chooseon' }
        
      ],
    }),
  }
</script>

