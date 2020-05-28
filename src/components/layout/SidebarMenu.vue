<template>
  <ul class="sidebar-menu">
    <router-link tag="li" class="pageLink" to="/user/publikasi">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">publikasi</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/user/abmas">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">abmas</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/user/dosen">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">dosen</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/user/penelitian">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">penelitian</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/user/DataDasar">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">DataDasar</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/user/JenisSatker">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">JenisSatker</span>
      </a>
    </router-link>
	  <router-link tag="li" class="pageLink" to="/user/Aspek">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Aspek</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/user/MasterIndikator">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">MasterIndikator</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/user/Periode">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Periode</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/user/MasterIndikatorFull">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">MasterIndikatorFull</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/user/IndikatorPeriode">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Indikator_Periode</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/user/SatuanKerja">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">SatuanKerja</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/user/CapaianUnit">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Capaian_Unit</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/user/Kokin">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Kokin</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/user/IndikatorSatuanKerja">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">IndikatorSatuanKerja</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/user/Indikator_SatuanKerja_Log">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Indikator_SatuanKerja_Log</span>
      </a>
    </router-link>
  </ul>
</template>
<script>
export default {
  name: 'SidebarMenu'
}
</script>
<style>
/* override default */
.sidebar-menu > li > a {
  padding: 12px 15px 12px 15px;
}
.sidebar-menu li.active > a > .fa-angle-left,
.sidebar-menu li.active > a > .pull-right-container > .fa-angle-left {
  animation-name: rotate;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
}
.treeview-title {
  z-index: 1;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-90deg);
  }
}
</style>
