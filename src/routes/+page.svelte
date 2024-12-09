<style lang="scss">
    /* Cool infinite background scrolling animation.
    * Twitter: @kootoopas
    */

    /* Exo thin font from Google. */
    @import url(https://fonts.googleapis.com/css?family=Exo:100);

    /* Background data (Original source: https://subtlepatterns.com/grid-me/) */
    $bg-url: "https://www.toptal.com/designers/subtlepatterns/uploads/repeated-square-dark.png";
    $bg-width: 50px;
    $bg-height: 50px;

    /* Animations */
    @-webkit-keyframes bg-scrolling-reverse {
    100% { background-position: $bg-width + 10 $bg-height + 10; }
    }
    @-moz-keyframes    bg-scrolling-reverse {
    100% { background-position: $bg-width + 10 $bg-height + 10; }
    }
    @-o-keyframes      bg-scrolling-reverse {
    100% { background-position: $bg-width + 10 $bg-height + 10; }
    }
    @keyframes         bg-scrolling-reverse {
    100% { background-position: $bg-width + 10 $bg-height + 10; }
    }

    @-webkit-keyframes bg-scrolling {
    0% { background-position: $bg-width + 10 $bg-height + 10; }
    }
    @-moz-keyframes    bg-scrolling {
    0% { background-position: $bg-width + 10 $bg-height + 10; }
    }
    @-o-keyframes      bg-scrolling {
    0% { background-position: $bg-width + 10 $bg-height + 10; }
    }
    @keyframes         bg-scrolling {
    0% { background-position: $bg-width + 10 $bg-height + 10; }
    }

    .vertical-line {
        width: 2px;
        height: 100px;
        background-color: #000;
        margin: 0 auto;
        transform: rotate(180deg);
    }

    .column {
        float: left;
        padding: 50px;
    }

    .column-right {
        justify-items: left;
    }

    .column-left {
        justify-items: right;
        border-right: 1px solid white;
    }

    .row:after {
        content: "";
        display: table;
        clear: both;
    }

    .overlay {
        z-index: 1000;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        opacity: 40%;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-repeat: no-repeat;
        background: -webkit-radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
        background: -moz-radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
        background: -ms-radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
        background: -o-radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
        background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
    }


    @mixin backlight($x, $y, $spread, $size, $colorA, $colorB, $duration) {
    &:after {
        position: absolute;
        content: "";
        top: $y;
        left: $x;
        right: 0;
        z-index: -1;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        transform: scale($size);
        -webkit-filter: blur($spread);
        -moz-filter: blur($spread);
        -ms-filter: blur($spread);
        filter: blur($spread);
        background: linear-gradient(270deg, $colorA, $colorB);
        background-size: 200% 200%;
        animation: animateGlow $duration ease infinite;
        
        @keyframes animateGlow {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
        }
    }
    }

    .soloblight {
        opacity: 10%;
        @include backlight(1vw, 3vw, 5vw, 0.75, #0fffc1, #7e0fff, 10s);
    }

    .blight {
        position: relative;
        width: 30vw;
        height: 30vw;
        line-height: 30vw;
        text-align: center;
        color: #252B37;
        background-color: rgba(0, 0, 0, 1);
        animation: textColor 10s ease infinite;
        @include backlight(1vw, 3vw, 5vw, 0.65, #0fffc1, #7e0fff, 10s);
            
        @keyframes textColor {
            0% {
            color: #7e0fff;
            }
            50% {
            color: #0fffc1;
            }
            100% {
            color: #7e0fff;
            }
        }
    }

    @keyframes scale {
        0% {
            font-size: 12px;
        }
        100% {
            font-size: 26px;
        }
    }

    @keyframes scale-reverse {
        100% {
            font-size: 12px;
        }
        0% {
            font-size: 26px;
        }
    }

    .link {
        line-height: 26px;
        font-size: 12px;
    }
    
    .link:hover {
        animation: scale 1s ease;
    }

    /* Main styles */
    :global(body) {
        display: flex;
        align-items: center;
        font-family: monospace;
        justify-content: center;
        margin-top: 13.5rem;
        
        color: #ffffff;
        font: 800 16px/1.5 exo, ubuntu, "segoe ui", helvetica, arial, sans-serif;
        text-align: center;
        /* img size is 50x50 */
        background: url($bg-url) repeat 0 0;

        
        -webkit-animation: bg-scrolling .9s infinite;
        -moz-animation:    bg-scrolling .9s infinite;
        -o-animation:      bg-scrolling .9s infinite;
        animation:         bg-scrolling .9s infinite;
        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function:    linear;
        -o-animation-timing-function:      linear;
        animation-timing-function:         linear;
    }

    *{box-sizing: border-box;}
</style>

<script lang="ts">
    import { randomQuote } from "$lib/index"
</script>

<title>ninXout</title>

<div class="overlay"></div>
<div class="soloblight"></div>
<div class="row">
    <div class="column column-left">
        <h1>ninXout</h1>
        <h2>he/him, 16</h2>
        <a>Discord: @ninxout</a>
        <p>Twitter: @ninXout</p>
    </div>
    <div class="column column-right">
        <p>Owner of Eclipse Menu and Crystal Client</p>
        <p>Lead Developer of Geode</p>
        <p>Developer of Globed, BetterEdit, and iCreate Pro</p>
    </div>
</div>