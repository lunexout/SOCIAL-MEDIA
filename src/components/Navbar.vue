<template>
            <nav class="container navbar navbar-expand-lg navbar-light bg-light p-0" 
            style="background-color: #fff !important; position:fixed; 
            z-index: 222; max-width:2500px; border: 1px; border-bottom: 1px solid white;">
                <div class="container" style="max-width: 1440px;">
                    <a class="navbar-brand logoNameFONT" href="#" style="color: white; font-size: 22px;">
                        <span style="color: #FFFFFF;"></span> 
                        <span class="p-1">
                        <router-link 
                        to='/user' 
                        class='pl-3 p-2 menu_icons' style="
                        border-top-left-radius: 25px;
                        border-bottom-left-radius: 25px;
                        border-top-right-radius: 25px;">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="48" height="48"
viewBox="0 0 172 172"
style=" fill:#000000;"><defs><linearGradient x1="49.62558" y1="22.059" x2="123.69667" y2="152.12325" gradientUnits="userSpaceOnUse" id="color-1_nNtT9r4dDsaU_gr1"><stop offset="0" stop-color="#1da1f2"></stop><stop offset="1" stop-color="#1da1f2"></stop></linearGradient></defs><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="url(#color-1_nNtT9r4dDsaU_gr1)"><path d="M86,161.25c-36.95133,0 -68.91467,-27.57017 -74.35058,-64.1345c-0.44433,-2.99925 1.04633,-5.95192 3.72308,-7.38167c2.67317,-1.42258 5.96267,-1.00692 8.19867,1.032c9.29158,8.47817 21.28142,13.15083 33.76217,13.15083c27.66333,0 50.16667,-22.50333 50.16667,-50.16667c0,-10.50633 -3.26442,-20.60417 -9.43492,-29.197c-1.77017,-2.46533 -1.79525,-5.77633 -0.06808,-8.27033c1.73075,-2.48683 4.84467,-3.6335 7.76867,-2.82725c32.66925,8.88308 55.48433,38.71792 55.48433,72.54458c0,41.49142 -33.755,75.25 -75.25,75.25zM31.39,112.77467c10.03333,20.3175 31.07108,34.142 54.61,34.142c33.59017,0 60.91667,-27.3265 60.91667,-60.91667c0,-21.01983 -10.88617,-40.13333 -27.91058,-51.13417c1.86692,6.07017 2.82725,12.41625 2.82725,18.88417c0,35.56458 -28.93542,64.5 -64.5,64.5c-9.01925,0 -17.83425,-1.88842 -25.94333,-5.47533z"></path></g></g></svg>
</router-link></span></a>
                            <div class="mr-auto"></div>
                            
                            <a class="nav-link m-0 p-0" 
                            style="display: inline-block; text-decoration: none;" 
                            href="#">
                            <router-link to='/user' class='p-3 menu_icon'>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="28" height="29"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#1da1f2"><path d="M65.36,165.12c-0.43,0 -0.87344,-0.08062 -1.30344,-0.25531c-1.53188,-0.63156 -2.40531,-2.27094 -2.05594,-3.89687l12.88656,-61.20781h-30.16719c-1.27656,0 -2.44562,-0.69875 -3.03687,-1.8275c-0.60469,-1.12875 -0.52406,-2.49937 0.18812,-3.5475l58.48,-86c0.94063,-1.35719 2.6875,-1.86781 4.1925,-1.22281c1.51844,0.645 2.365,2.2575 2.02906,3.87l-12.9,61.20781h26.72719c1.24969,0 2.41875,0.68531 3.02344,1.78719c0.60469,1.10188 0.55094,2.44563 -0.12094,3.50719l-55.04,86c-0.65844,1.02125 -1.76031,1.58562 -2.9025,1.58562z"></path></g></g></svg>
                            <span class="sr-only"></span></router-link></a>

                            <a class="nav-link m-0 p-0" 
                            style="display: inline-block;
                            text-decoration: none; color: white;" href="#">
                            <router-link to='/user' class='p-3 menu_icons'>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="28" height="28"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000"><path d="M86,20.64c39.82875,0 72.24,27.76188 72.24,61.89313c0,34.13125 -32.41125,61.90656 -72.24,61.90656c-6.08719,0 -12.01312,-0.69875 -18.11375,-2.12312l-4.07156,-0.95406l-2.72781,3.17125c-2.35156,2.75469 -10.25281,10.84406 -23.28719,13.115c2.48594,-4.48812 4.36719,-9.05687 5.60344,-13.62562c0.95406,-3.56094 1.12875,-5.42875 1.1825,-7.05469l0.16125,-3.84312l-3.18469,-2.15c-17.67031,-11.94594 -27.80219,-29.60281 -27.80219,-48.44219c0,-34.13125 32.41125,-61.89313 72.24,-61.89313M86,13.76c-43.59125,0 -79.12,30.54344 -79.12,68.77313c0,22.19875 12.1475,41.52187 30.82563,54.13969c-0.02688,0.73906 0.02687,1.94844 -0.95406,5.54969c-1.19594,4.47469 -3.64156,10.76344 -8.58656,17.85844l-3.52062,5.03906h6.14094c21.29844,0 33.62062,-13.88094 35.52875,-16.11156c6.3425,1.49156 12.87312,2.31125 19.68594,2.31125c43.59125,0 79.12,-30.54344 79.12,-68.78656c0,-38.22969 -35.52875,-68.77313 -79.12,-68.77313z"></path></g></g></svg>
                           </router-link></a>

                            <a class="nav-link m-0 p-0" 
                            style="display: inline-block; 
                            text-decoration: none;" href="#">
                            <router-link to='/user' class='p-3 menu_icons'>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="28" height="28"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000"><path d="M51.6,24.08c-24.65781,0 -44.72,20.06219 -44.72,44.72c0,50.78031 57.43188,75.84125 76.97,92.1275l2.15,1.8275l2.15,-1.8275c19.53813,-16.28625 76.97,-41.34719 76.97,-92.1275c0,-24.65781 -20.06219,-44.72 -44.72,-44.72c-13.94812,0 -26.20312,6.62469 -34.4,16.6625c-8.19687,-10.03781 -20.45187,-16.6625 -34.4,-16.6625zM51.6,30.96c13.19563,0 24.725,6.7725 31.4975,16.985l2.9025,4.3l2.9025,-4.3c6.7725,-10.2125 18.30188,-16.985 31.4975,-16.985c20.93563,0 37.84,16.90438 37.84,37.84c0,44.37063 -49.5575,67.33531 -72.24,85.2475c-22.6825,-17.91219 -72.24,-40.87687 -72.24,-85.2475c0,-20.93562 16.90438,-37.84 37.84,-37.84z"></path></g></g></svg>
                            </router-link>
                            </a>

                            <div class="dropdown dropleft profile_dropdown1 text-right">
                            <!-- <button class="btn btn-secondary dropdown-toggle" style="display: inline-block;" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> -->
                            <!-- </button> -->
                            <a 
                            class="btn btn-primary dropdown-toggle profile_dropdown" 
                            id="dropdownMenuButton" data-toggle="dropdown"
                             aria-haspopup="true" aria-expanded="false">
                             <!-- {{ name }}  -->
                            <span class="badge">                              
                                    <div class="image">
                                        <img :src="image" 
                                        class="round_picture" 
                                        style="display: inline-block;"
                                        width="37" height='37'>
                                    </div>   
                            </span>
                            </a>

                            <div class="dropdown-menu mt-5" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button">
                                    <router-link to='/user' class="profileMenuFONT">
                                        პარამეტრები
                                    </router-link>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="24" height="24"
viewBox="0 0 172 172"
style="fill:#3CB54A;"><g fill="" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000"><path d="M83.635,6.88c-3.06691,0 -5.78792,2.1147 -6.53063,5.09953l-1.47812,5.9125c-5.10808,0.77578 -10.01994,2.0931 -14.70062,3.92375l-4.2261,-4.36719c-2.13292,-2.20984 -5.54117,-2.68213 -8.19688,-1.15562h-0.00672l-4.09844,2.365c-2.66575,1.53631 -3.96015,4.73103 -3.11078,7.68625l1.69313,5.89906c-3.96377,3.17877 -7.55211,6.76855 -10.72985,10.72985l-5.90578,-1.68641c-2.95304,-0.84673 -6.14548,0.44224 -7.67953,3.10406l-2.365,4.09844c-1.53043,2.65554 -1.05778,6.06765 1.14891,8.2036l4.37391,4.23281c-1.83145,4.68158 -3.15557,9.59495 -3.93047,14.70062l-5.9125,1.47812c-2.97376,0.74625 -5.09953,3.46569 -5.09953,6.53063v4.73c0,3.06494 2.11101,5.78586 5.09281,6.53063l5.9125,1.4714c0.77532,5.10838 2.10018,10.0196 3.93047,14.70062l-4.36719,4.23281c-2.21254,2.13552 -2.68763,5.54532 -1.15562,8.2036l2.365,4.09844c1.53631,2.66575 4.73103,3.96015 7.68625,3.11078l5.89234,-1.69313c3.18127,3.96754 6.77143,7.55659 10.73656,10.73656l-1.69313,5.89906c-0.84673,2.95304 0.44896,6.14548 3.11078,7.67953l4.09844,2.365c2.65828,1.532 6.06807,1.05692 8.2036,-1.15563l4.23281,-4.36719c4.68187,1.83002 9.59267,3.15511 14.70062,3.93047l1.47812,5.9125v0.00672c0.74966,2.97071 3.46372,5.09281 6.53063,5.09281h4.73c3.06691,0 5.78932,-2.12006 6.53063,-5.10625l1.47812,-5.90578c5.1086,-0.77641 10.02118,-2.09506 14.70062,-3.92375l4.2261,4.36719c2.13292,2.20984 5.54117,2.68213 8.19688,1.15563h0.00672l4.09844,-2.365l0.00672,-0.00672c2.65785,-1.53704 3.94859,-4.72268 3.10406,-7.67281l-1.69313,-5.90578c3.96393,-3.17877 7.55211,-6.76855 10.72985,-10.72985l5.90578,1.68641c2.95304,0.84673 6.14548,-0.44224 7.67953,-3.10406l2.365,-4.09844c1.53043,-2.65554 1.05778,-6.06765 -1.14891,-8.2036l-0.00672,-0.00672l-4.36719,-4.2261c1.8295,-4.68034 3.15495,-9.59443 3.93047,-14.70062l5.90578,-1.47812c2.97692,-0.74403 5.10625,-3.46372 5.10625,-6.53063v-4.73c0,-3.06681 -2.11884,-5.78364 -5.09281,-6.53063l-5.9125,-1.47812c-0.77548,-5.10661 -2.10071,-10.02112 -3.93047,-14.70062l4.36719,-4.2261c2.20984,-2.13292 2.68886,-5.54789 1.16235,-8.2036h-0.00672l-2.365,-4.10515c-1.53513,-2.66371 -4.72621,-3.94951 -7.67953,-3.10406h-0.00672l-5.89906,1.68641c-3.17871,-3.96371 -6.76832,-7.55238 -10.72985,-10.72985l1.69313,-5.89906v-0.00672c0.8419,-2.94795 -0.45012,-6.13802 -3.10406,-7.67281l-4.10515,-2.37172c-2.65828,-1.53201 -6.06807,-1.05692 -8.2036,1.15562l-4.22609,4.37391c-4.68366,-1.83123 -9.59721,-3.15478 -14.70735,-3.93047l-1.47812,-5.9125v-0.00672c-0.74966,-2.97088 -3.46372,-5.09281 -6.53063,-5.09281zM83.75594,13.76h4.49485l2.51281,10.04453l2.37172,0.26875c6.22061,0.70785 12.14828,2.3188 17.67031,4.71656l2.19031,0.94734l7.17563,-7.42422l3.89687,2.25078l-2.84875,9.98406l1.90813,1.41765c4.91262,3.65347 9.25453,7.99928 12.90672,12.91344l1.41765,1.90813l9.99078,-2.85547l2.24406,3.89687l-7.4175,7.18235l0.94734,2.18359c2.39724,5.51755 4.0087,11.45629 4.71656,17.67703l0.26875,2.365l10.03781,2.51281v4.50156l-10.04453,2.51281l-0.26875,2.365c-0.70785,6.22061 -2.3188,12.155 -4.71656,17.67703l-0.94734,2.18359l7.4175,7.18235l-2.24406,3.89687l-9.98406,-2.85547l-1.42437,1.90813c-3.65348,4.91262 -7.99256,9.26124 -12.90672,12.91344l-1.90813,1.41765l2.84875,9.98406l-3.89687,2.25078l-7.17563,-7.42422l-2.18359,0.94734c-5.51952,2.39483 -11.45747,4.01555 -17.67703,4.72328l-2.37172,0.26875l-2.51281,10.03781h-4.49485l-2.51281,-10.04453l-2.37172,-0.26875c-6.22061,-0.70785 -12.14828,-2.3188 -17.67031,-4.71656l-2.19031,-0.94734l-7.17563,7.4175l-3.89687,-2.24406l2.84875,-9.98406l-1.90813,-1.42437c-4.91262,-3.65348 -9.25453,-7.99256 -12.90672,-12.90672l-1.41765,-1.90813l-9.99078,2.84875l-2.24406,-3.89687l7.4175,-7.17563l-0.94734,-2.19031c-2.39723,-5.51755 -4.0087,-11.44957 -4.71656,-17.67031l-0.26875,-2.37172l-10.03781,-2.51281v-4.49485l10.04453,-2.51281l0.26875,-2.365c0.70799,-6.22179 2.31639,-12.15697 4.71656,-17.67703l0.94734,-2.18359l-7.4175,-7.18235l2.24406,-3.89687l9.98406,2.85547l1.42437,-1.90813c3.65348,-4.91262 7.99256,-9.26124 12.90672,-12.91344l1.90813,-1.41765l-2.84875,-9.98406l3.89687,-2.25078l7.17563,7.42422l2.19031,-0.94734c5.51755,-2.39723 11.44957,-4.01542 17.67031,-4.72328l2.37172,-0.26875zM82.56,37.85344l-3.96406,0.61141c-12.09688,1.87359 -22.72159,8.21251 -30.07984,17.33437l-2.52625,3.13094l27.00265,15.5875l1.84765,-1.58562c1.57845,-1.35296 3.41266,-2.41768 5.42875,-3.13094l2.2911,-0.80625v-2.43219zM89.44,37.85344v31.13469l2.2911,0.81297c2.01317,0.71324 3.84521,1.77607 5.42875,3.13094l1.85437,1.58562l2.10297,-1.21609l24.89297,-14.37141l-2.52625,-3.13094c-7.3579,-9.12142 -17.97957,-15.46083 -30.07984,-17.33437zM75.68,46.66844v17.97266c-1.05365,0.50958 -2.05432,1.08669 -3.01672,1.74015l-15.60094,-9.00312c5.09644,-5.13928 11.39954,-8.80912 18.61765,-10.70969zM96.32,46.66844c7.21953,1.90024 13.52143,5.57037 18.61765,10.70969l-15.59422,9.00312c-0.96408,-0.65466 -1.96862,-1.22965 -3.02344,-1.74015zM42.56328,64.8964l-1.45125,3.74906c-2.0796,5.37447 -3.27203,11.21969 -3.27203,17.35453c0,6.13484 1.19243,11.98006 3.27203,17.35453l1.45125,3.74906l26.97578,-15.57406l-0.43672,-2.38516c-0.19227,-1.05008 -0.30235,-2.09696 -0.30235,-3.14437c0,-1.04741 0.11008,-2.09429 0.30235,-3.14437l0.43672,-2.38516zM129.43672,64.8964l-26.97578,15.57406l0.43672,2.38516c0.19227,1.05008 0.30235,2.09696 0.30235,3.14437c0,1.04741 -0.11008,2.09429 -0.30235,3.14437l-0.43672,2.38516l26.97578,15.57406l1.45125,-3.74906c2.0796,-5.37447 3.27203,-11.21969 3.27203,-17.35453c0,-6.13484 -1.19243,-11.98006 -3.27203,-17.35453zM46.74906,75.25672l15.35234,8.86203c-0.05368,0.63193 -0.1814,1.22596 -0.1814,1.88125c0,0.65529 0.12774,1.24932 0.1814,1.88125l-15.35234,8.86203c-0.97,-3.48601 -2.02906,-6.95541 -2.02906,-10.74328c0,-3.78787 1.05905,-7.25727 2.02906,-10.74328zM125.25094,75.25672c0.97001,3.48601 2.02906,6.95541 2.02906,10.74328c0,3.78787 -1.05905,7.25727 -2.02906,10.74328l-15.35234,-8.86203c0.05368,-0.63193 0.1814,-1.22596 0.1814,-1.88125c0,-0.65529 -0.12774,-1.24932 -0.1814,-1.88125zM72.98578,97.48235l-2.10297,1.21609l-24.89297,14.37141l2.52625,3.13094c7.3579,9.12142 17.97957,15.46083 30.07984,17.33437l3.96406,0.61141v-31.13469l-2.2911,-0.81297c-2.01317,-0.71324 -3.84521,-1.77607 -5.42875,-3.13094zM99.0075,97.48235l-1.84765,1.58562c-1.57845,1.35296 -3.41266,2.41768 -5.42875,3.13094l-2.2911,0.80625v2.43219v28.70922l3.96406,-0.61141c12.09688,-1.87359 22.72159,-8.21251 30.07984,-17.33437l2.52625,-3.13094zM72.65656,105.61875c0.96407,0.65466 1.96862,1.22965 3.02344,1.74015v17.97266c-7.21953,-1.90024 -13.52143,-5.57037 -18.61765,-10.70969zM99.33672,105.61875l15.60094,9.00312c-5.09643,5.13928 -11.39954,8.80912 -18.61765,10.70969v-17.97266c1.05365,-0.50958 2.05432,-1.08669 3.01672,-1.74015z"></path></g></g></svg>
                                </button>
                                <div style=" width: 100%; height: 1px; background-color: #1DA1F2;"></div>
                                <button
                                class="dropdown-item text-left" 
                                type="button"
                                @click='$emit("logout")'
                                >
                                <router-link to='/user' class="profileMenuFONT">
                                    გასვლა
                                </router-link>
                                </button>
                            </div>
                            </div>
                </div>  
            </nav>
</template>

<script>
export default {
    name: 'NavbarApp',
    props: {
        image: {
            type: String
        }
    }
}
</script>
<style lang="scss" scoped>
@font-face {
    font-family: logoNameFONT;
    src: url('../fonts/Pacifico-Regular.ttf');
}
@font-face {
    font-family: profileMenuFONT;
    src: url('../fonts/bpg_arial_2009.ttf');
}
.profileMenuFONT {
    font-family: profileMenuFONT;
    color: black;
    text-decoration: none;
}
.logoNameFONT {
    font-family: logoNameFONT;
}
.profile_dropdown1 {
    background-color: transparent !important; border: none;
}
.profile_dropdown1:hover {
    background-color: #E8F5FE !important;
}
.profile_dropdown {
    background-color: #33A9E9 !important;
}
.profile_dropdown {
background-color: transparent !important; 
border: none; 
text-decoration: none;
}
.menu_icons.router-link-active.router-link-exact-active:hover{
        color: #1DA1F2 !important;
    background-color: #E8F5FE;
    // opacity: 0.2;
}
.menu_icon.router-link-active.router-link-exact-active:hover{
        color: #1DA1F2 !important;
    background-color: #E8F5FE;
    // opacity: 0.2;
}
</style>