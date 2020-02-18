<template>
  <div>
    <div id="app" ref="spreadsheet"></div>
    <h2>DATA MAHASISWA</h2>
  </div>
</template>

<script>
import jexcel from 'jexcel'
import 'jexcel/dist/jexcel.css'
var data = [
  ['05111740000019', 'Honda', '2017', '11/01/2019', '', true],
  ['05111740000029', 'Honda1', '2017', '12/02/2019', '', true],
  ['05111740000039', 'Honda2', '2017', '13/03/2019', '', false],
  ['05111740000049', 'Honda3', '2017', '14/04/2019', '', true],
  ['05111740000059', 'Honda4', '2017', '15/05/2019', '', true],
  ['05111740000069', 'Honda5', '2017', '16/06/2019', '', false],
  ['05111740000079', 'Honda6', '2017', '17/07/2019', '', true],
  ['05111740000089', 'Honda7', '2017', '18/08/2019', '', true],
  ['05111740000099', 'Honda8', '2017', '19/09/2019', '', true]
]
var options = {
  data: data,
  allowToolbar: true,
  columns: [
    { type: 'numeric', title: 'NRP', width: '200px' },
    { type: 'text', title: 'Nama', width: '200px' },
    { type: 'numeric', title: 'Angkatan', width: '200px' },
    { type: 'calender', title: 'Tgl Lahir', width: '200px' },
    { type: 'image', title: 'Photo', width: '200px' },
    { type: 'checkbox', title: 'Aktif', width: '80px' }
  ]
}
export default {
  name: 'App',
  mounted: function () {
    let spreadsheet = jexcel(this.$el, options)
    Object.assign(this, { spreadsheet })
  }
}
</script>
