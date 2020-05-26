<template>
  <ul class="sidebar-menu">
    <li class="header">TOOLS</li>
    <router-link tag="li" class="pageLink" to="/">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Dashboard</span>
      </a>
    </router-link>
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
    <router-link tag="li" class="pageLink" to="/user/Indikator_SatuanKerja">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Indikator_SatuanKerja</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/user/Indikator_SatuanKerja_Log">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Indikator_SatuanKerja_Log</span>
      </a>
    </router-link>

    <li class="header">ME</li>
    <router-link tag="li" class="pageLink" to="/tasks">
      <a>
        <i class="fa fa-tasks"></i>
        <span class="page">Tasks</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/setting">
      <a>
        <i class="fa fa-cog"></i>
        <span class="page">Settings</span>
      </a>
    </router-link>
    <li class="treeview">
      <a href="#">
        <i class="fa fa-folder-o"></i>
        <span class="treeview-title">Files</span>
        <span class="pull-right-container pull-right">
          <i class="fa fa-angle-left fa-fw"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li>
          <a href="#">
            <i class="fa fa-file-word-o"></i> Item 1
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-file-picture-o"></i> Item 2
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-file-pdf-o"></i> Item 3
          </a>
        </li>
      </ul>
    </li>

    <li class="header">LOGS</li>
    <router-link tag="li" class="pageLink" to="/access">
      <a>
        <i class="fa fa-book"></i>
        <span class="page">Access</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/server">
      <a>
        <i class="fa fa-hdd-o"></i>
        <span class="page">Server</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/repos">
      <a>
        <i class="fa fa-heart"></i>
        <span class="page">Repos</span>
        <small class="label pull-right bg-green">AJAX</small>
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
