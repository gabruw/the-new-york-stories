//#region Imports

import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

//#endregion

const Logo = ({ width = '100%', height = '100%', fill = '#FFFFFF' }) => (
    <Svg
        version='1.0'
        width={width}
        height={height}
        viewBox='0 0 288.000000 402.000000'
        preserveAspectRatio='xMidYMid meet'
    >
        <G transform='translate(0.000000,402.000000) scale(0.100000,-0.100000)' fill={fill} stroke='none'>
            <Path
                d='M2160 4008 c-38 -9 -42 -12 -24 -18 11 -5 56 -13 99 -20 154 -23 234
                    -81 265 -192 20 -66 -44 -162 -128 -195 -91 -35 -286 -10 -522 67 -250 81
                    -576 182 -665 205 -214 55 -321 65 -452 40 -192 -36 -369 -140 -466 -273 -92
                    -125 -118 -202 -124 -362 -5 -115 -3 -132 19 -196 30 -85 85 -172 141 -219 43
                    -37 141 -89 158 -83 5 2 -5 19 -22 38 -52 60 -63 89 -64 165 0 58 5 80 30 128
                    76 151 221 180 510 104 142 -38 375 -99 555 -148 345 -92 638 -159 697 -159
                    l33 0 0 -342 0 -343 -165 -133 c-91 -73 -163 -137 -160 -142 5 -8 178 -150
                    286 -235 l38 -30 1 -478 0 -478 -82 -39 c-112 -51 -211 -78 -346 -92 -131 -14
                    -292 -1 -384 31 -159 55 -336 163 -441 268 l-57 59 425 212 425 212 0 740 c0
                    407 -1 740 -3 740 -5 0 -270 -117 -345 -151 -144 -68 -696 -309 -698 -306 -8
                    8 87 182 141 256 86 119 171 200 314 296 l74 50 -36 3 c-72 6 -304 -95 -469
                    -205 -271 -180 -487 -437 -605 -723 -76 -183 -106 -336 -106 -540 -1 -435 145
                    -800 433 -1090 272 -274 646 -429 1035 -430 217 0 392 44 630 159 323 157 532
                    408 656 786 45 139 77 355 64 434 -8 51 -19 52 -33 3 -7 -22 -40 -86 -74 -143
                    -105 -174 -217 -303 -373 -428 l-90 -72 -3 461 -2 462 22 19 c13 10 87 69 165
                    131 78 62 142 116 142 120 1 4 -73 67 -164 140 l-165 133 0 336 0 337 31 6
                    c17 3 46 6 64 6 76 0 209 55 307 127 206 150 287 471 177 702 -94 200 -426
                    343 -669 289z m-1082 -2220 l-3 -703 -104 -53 c-121 -61 -115 -62 -179 47
                    -180 304 -248 598 -208 892 19 134 26 168 58 271 l20 66 142 63 c77 35 166 76
                    196 91 30 15 61 27 68 27 10 1 12 -143 10 -701z'
            />
        </G>
    </Svg>
);

export default Logo;
