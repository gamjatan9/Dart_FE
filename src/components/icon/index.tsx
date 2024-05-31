import { MouseEvent } from 'react';
import { Colors, colors } from '@/styles/colorPalette';

import * as S from './styles';

export type IconValues = 'cancel' | 'chat' | 'review' | 'out' | 'galaxy' | 'halfreview';

interface IconProps {
  value: IconValues;
  $rotate?: boolean;
  $active?: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  size?: number;
  color?: Colors;
  strokeColor?: Colors;
  fillColor?: Colors;
}

const Icon = ({ value, $active = true, color = 'black', strokeColor, fillColor, ...props }: IconProps) => {
  return (
    <S.Container value={value} $active={$active} {...props}>
      {renderIcon(value, color, strokeColor, fillColor)}
    </S.Container>
  );
};

const renderIcon = (value: IconValues, color: Colors, strokeColor?: Colors, fillColor?: Colors) => {
  switch (value) {
    case 'cancel':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M7.86939 7.19881H7.99345L13.204 0.751282H15.4258L9.30172 8.25128L15.4258 15.7513H13.204L7.98217 9.40105H7.85811L2.63631 15.7513H0.425781L6.66262 8.25128L0.425781 0.751282H2.67014L7.86939 7.19881Z"
            fill={colors[color]}
          />
        </svg>
      );
    case 'review' :
      return (
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 26C20.4036 26 26 20.4036 26 13.5C26 6.59644 20.4036 1 13.5 1C6.59644 1 1 6.59644 1 13.5C1 20.4036 6.59644 26 13.5 26Z" stroke={colors[strokeColor || 'black']} strokeWidth="1.5" strokeMiterlimit="10"/>
          <path d="M14.4509 9.6525L14.9909 11.3125C15.1209 11.7025 15.4809 11.9625 15.8909 11.9625H17.6409C18.5609 11.9625 18.9409 13.1325 18.2009 13.6725L16.7809 14.7025C16.4509 14.9425 16.3109 15.3725 16.4409 15.7625L16.9809 17.4225C17.2609 18.2925 16.2709 19.0225 15.5209 18.4825L14.1009 17.4525C13.7709 17.2125 13.3209 17.2125 12.9909 17.4525L11.5709 18.4825C10.8309 19.0225 9.83087 18.2925 10.1109 17.4225L10.6509 15.7625C10.7809 15.3725 10.6409 14.9425 10.3109 14.7025L8.89087 13.6725C8.15087 13.1325 8.53087 11.9625 9.45087 11.9625H11.2009C11.6109 11.9625 11.9709 11.7025 12.1009 11.3125L12.6409 9.6525C12.9209 8.7825 14.1609 8.7825 14.4409 9.6525H14.4509Z" fill={colors[fillColor || 'white']} stroke={colors[strokeColor || 'black']}/>
        </svg>
      );
    case 'halfreview' :
      return (
        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 30C23.0081 30 29.5 23.5081 29.5 15.5C29.5 7.49187 23.0081 1 15 1C6.99187 1 0.5 7.49187 0.5 15.5C0.5 23.5081 6.99187 30 15 30Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
          <path d="M20.5342 15.3051C21.4158 14.6367 20.9631 13.1885 19.867 13.1885H17.7821C17.2936 13.1885 16.8647 12.8667 16.7098 12.384L16.0664 10.3293C15.8996 9.78466 15.4469 9.52478 14.9941 9.52478V19.7733C15.2324 19.7733 15.4588 19.8476 15.6613 19.9961L17.3531 21.271C18.2348 21.9394 19.4262 21.0359 19.0926 19.959L18.4492 17.9043C18.2944 17.4216 18.4611 16.8894 18.8543 16.5923L20.5461 15.3175L20.5342 15.3051Z" stroke="white" stroke-width="0.5" stroke-miterlimit="10"/>
          <path d="M13.9335 10.3169L13.2901 12.3716C13.1352 12.8543 12.7063 13.1761 12.2178 13.1761H10.1329C9.03679 13.1761 8.58404 14.6243 9.46568 15.2927L11.1575 16.5676C11.5507 16.8647 11.7175 17.3969 11.5626 17.8796L10.9192 19.9342C10.5856 21.0111 11.7651 21.9146 12.6587 21.2463L14.3505 19.9714C14.553 19.8229 14.7794 19.7486 15.0176 19.7486V9.5C14.5649 9.5 14.1122 9.77234 13.9454 10.3046L13.9335 10.3169Z" fill="white"/>
        </svg>
      );
    case 'chat' :
      return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.1666 22.513L19.4283 21.7209L19.0649 21.6008L18.7366 21.7993L19.1666 22.513ZM22.4999 19.1778L21.7983 18.7275L21.5833 19.0644L21.7099 19.4413L22.4999 19.1778ZM24.1666 24.164L23.9049 24.9578C24.0519 25.0064 24.2094 25.0132 24.36 24.9773C24.5105 24.9413 24.6481 24.8641 24.7573 24.7544C24.8665 24.6446 24.943 24.5066 24.9782 24.3558C25.0134 24.205 25.0059 24.0473 24.9566 23.9005L24.1666 24.164ZM18.7366 21.7993C17.1433 22.7582 14.5949 23.3319 12.5 23.3319V24.9995C14.8083 24.9995 17.6766 24.3825 19.5966 23.2268L18.7366 21.7993ZM12.5 23.3302C6.51664 23.3302 1.66666 18.4807 1.66666 12.4972H0C0.000437679 14.1393 0.324106 15.7652 0.952524 17.282C1.58094 18.7989 2.5018 20.1771 3.66253 21.3379C4.82326 22.4986 6.20112 23.4193 7.71745 24.0473C9.23378 24.6753 10.8589 24.9983 12.5 24.9978V23.3302ZM1.66666 12.4972C1.66799 9.62357 2.81004 6.86977 4.84163 4.83856C6.87322 2.80735 9.62796 1.66675 12.5 1.66763V4.45732e-07C9.18593 -0.00088431 6.00727 1.31541 3.66312 3.65936C1.31897 6.00332 0.00132584 9.18129 0 12.4972H1.66666ZM12.5 1.66763C18.4833 1.66763 23.3332 6.51711 23.3332 12.4989H24.9999C24.9986 9.18295 23.6809 6.00332 21.3368 3.65936C18.9926 1.31541 15.814 -0.00088431 12.5 4.45732e-07V1.66763ZM23.3332 12.4989C23.3332 14.7185 22.8399 17.0982 21.7983 18.7275L23.2016 19.628C24.4766 17.6352 24.9999 14.9036 24.9999 12.4989H23.3332ZM18.9049 23.3052L23.9049 24.9578L24.4282 23.3735L19.4283 21.7226L18.9049 23.3052ZM24.9566 23.9005L23.2899 18.9143L21.7099 19.4413L23.3766 24.4292L24.9566 23.9005Z" fill="white"/>
        </svg>
      );
    case 'out' :
      return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.599609 12.7301C0.599609 9.84014 0.599609 6.94014 0.599609 4.05014C0.599609 2.13014 1.7396 0.640145 3.5896 0.140145C3.9396 0.0401445 4.31958 0.0101435 4.68958 0.0101435C7.92957 0.0101435 11.1797 0.0201452 14.4197 0.00014516C16.8897 -0.0198548 18.6096 2.03014 18.4996 4.10014C18.4696 4.70014 18.4996 5.29014 18.4996 5.89014C18.4996 6.54014 18.1197 6.96015 17.5397 6.97015C16.9697 6.97015 16.5397 6.55015 16.5197 5.93015C16.4997 5.32015 16.5197 4.71014 16.5197 4.10014C16.5197 2.83014 15.6997 2.01014 14.4297 2.01014C11.1897 2.01014 7.93958 2.01014 4.69958 2.01014C3.42958 2.01014 2.60961 2.83014 2.59961 4.10014C2.59961 9.87014 2.59961 15.6501 2.59961 21.4201C2.59961 22.6901 3.41958 23.5001 4.69958 23.5101C7.93958 23.5101 11.1897 23.5101 14.4297 23.5101C15.6997 23.5101 16.5097 22.6801 16.5197 21.4201C16.5197 20.8101 16.5097 20.2001 16.5197 19.5901C16.5297 19.0601 16.8497 18.6701 17.2997 18.5701C17.7497 18.4701 18.1897 18.6801 18.3997 19.0901C18.4397 19.1601 18.4796 19.2401 18.4796 19.3101C18.4496 20.3901 18.5396 21.5001 18.3396 22.5501C18.0096 24.2501 16.4296 25.4801 14.6996 25.4901C11.2696 25.5201 7.83967 25.5301 4.40967 25.4901C2.31967 25.4701 0.619619 23.7201 0.609619 21.6201C0.589619 18.6601 0.609619 15.7001 0.609619 12.7401L0.599609 12.7301Z" fill="white"/>
          <path d="M23.1588 11.6901C22.6788 11.2201 22.1888 10.7601 21.7188 10.2901C21.3488 9.92011 21.2587 9.50011 21.4387 9.10011C21.7187 8.50011 22.4888 8.31011 22.9688 8.76011C23.8188 9.57011 24.6688 10.3901 25.4488 11.2701C26.1988 12.1201 26.1488 13.5801 25.3688 14.4201C24.6188 15.2401 23.8188 16.0101 23.0188 16.7901C22.6088 17.1901 22.0088 17.1601 21.6288 16.7701C21.2388 16.3801 21.2288 15.8001 21.6288 15.3801C22.1188 14.8701 22.6488 14.3901 23.1588 13.8901C23.1388 13.8501 23.1188 13.8201 23.1088 13.7801C22.9688 13.7801 22.8388 13.7801 22.6988 13.7801C18.9388 13.7801 15.1889 13.7801 11.4289 13.7801C11.0189 13.7801 10.6687 13.6801 10.4387 13.3101C10.0387 12.6601 10.4488 11.8801 11.2288 11.7901C11.3588 11.7801 11.4888 11.7901 11.6288 11.7901C15.3088 11.7901 18.9888 11.7901 22.6588 11.7901H23.0788L23.1288 11.6901H23.1588Z" fill="white"/>
        </svg>
      );
    case 'galaxy' :
      return (
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.52156 6.31006C7.58156 7.07006 8.64156 7.82008 9.88156 8.71008C10.4116 5.83008 10.2516 3.13005 10.6616 0.490051C10.7716 2.23005 10.8716 3.97008 10.9816 5.71008C11.0216 6.37008 11.0516 7.04006 11.1216 7.69006C11.2116 8.52006 11.4916 8.65003 12.1616 8.16003C13.0216 7.54003 13.8616 6.88008 14.8216 6.33008C14.0416 7.39008 13.2716 8.45008 12.3416 9.71008C13.0116 9.84008 13.4516 9.97006 13.9016 10.0001C16.1616 10.1501 18.4316 10.2801 20.6916 10.4401C17.9916 10.8101 15.2516 10.66 12.5716 11.16C12.5416 11.25 12.5116 11.33 12.4816 11.42L14.8116 14.6C14.8116 14.6 14.7516 14.6701 14.7316 14.7101C14.0016 14.1601 13.2816 13.5901 12.5416 13.0701C12.2016 12.8301 11.8116 12.68 11.4516 12.48C11.3316 12.89 11.1316 13.3 11.1016 13.72C10.9316 16 10.8016 18.2901 10.5416 20.5901C10.4816 19.5901 10.4116 18.59 10.3516 17.6C10.2716 16.18 10.2216 14.76 10.0916 13.35C10.0016 12.33 9.73157 12.2501 8.90157 12.8701C8.06157 13.5101 7.22156 14.1501 6.29156 14.6901C6.91156 13.8601 7.54156 13.0501 8.14156 12.2001C8.33156 11.9301 8.41156 11.5801 8.53156 11.2701C8.20156 11.1601 7.88157 10.9801 7.54156 10.9601C5.23156 10.7901 2.91156 10.6601 0.601562 10.4401C1.93156 10.3501 3.27156 10.27 4.60156 10.16C5.93156 10.05 7.29156 10.19 8.77156 9.67004C7.94156 8.50004 7.19156 7.45008 6.43156 6.39008C6.46156 6.37008 6.48157 6.34007 6.51157 6.32007L6.52156 6.31006Z" fill="black"/>
          <path d="M10.5407 21C10.3307 21 10.1607 20.83 10.1507 20.62L10.0907 19.67C10.0507 18.99 10.0007 18.31 9.96068 17.62C9.93068 17.17 9.91068 16.7101 9.89068 16.2601C9.84068 15.3101 9.79068 14.33 9.71068 13.38C9.69068 13.1 9.65068 12.9601 9.63068 12.8901C9.56068 12.9201 9.42068 12.99 9.17068 13.18L9.06068 13.2601C8.26068 13.8701 7.43068 14.4901 6.52068 15.0301C6.36068 15.1301 6.14068 15.0901 6.02068 14.9501C5.89068 14.8101 5.88068 14.59 6.00068 14.44C6.17068 14.21 6.35068 13.98 6.52068 13.75C6.96068 13.17 7.42068 12.5701 7.84068 11.9601C7.93068 11.8401 7.99068 11.67 8.05068 11.5C7.87068 11.43 7.70068 11.36 7.55068 11.35C6.93068 11.31 6.31068 11.26 5.69068 11.22C4.02068 11.11 2.30068 10.9901 0.600679 10.8301C0.390679 10.8101 0.230679 10.63 0.240679 10.42C0.240679 10.21 0.410681 10.0401 0.610681 10.0201C1.02068 9.99006 1.42068 9.97005 1.83068 9.94005C2.74068 9.88005 3.68068 9.82003 4.60068 9.74003C4.98068 9.71003 5.37068 9.70004 5.74068 9.68004C6.52068 9.66004 7.32068 9.63003 8.15068 9.42003L6.14068 6.59007C6.02068 6.43007 6.05068 6.20005 6.19068 6.07005L6.27068 6.00004C6.41068 5.87004 6.62068 5.85007 6.78068 5.96007L9.62068 7.99003C9.82068 6.67003 9.89068 5.38004 9.96068 4.12004C10.0307 2.84004 10.1007 1.64002 10.2907 0.410017C10.3207 0.210017 10.5007 0.0500512 10.7107 0.0700512C10.9207 0.0700512 11.0807 0.240056 11.0907 0.450056L11.1607 1.67003C11.2407 3.00003 11.3207 4.34003 11.4107 5.67003L11.4407 6.10002C11.4707 6.61002 11.5007 7.13006 11.5607 7.64006C11.5807 7.86006 11.6207 7.97006 11.6407 8.02006C11.6907 8.00006 11.8007 7.95006 11.9707 7.83006C12.1507 7.70006 12.3307 7.57005 12.5107 7.44005C13.1907 6.94005 13.8907 6.43002 14.6707 5.98002C14.8307 5.88002 15.0407 5.92004 15.1707 6.06004C15.3007 6.20004 15.3107 6.41005 15.1907 6.57005L13.0807 9.44005C13.0807 9.44005 13.0807 9.44005 13.0907 9.44005C13.4307 9.51005 13.7107 9.57007 13.9707 9.59007C14.8807 9.65007 15.7907 9.71005 16.7007 9.76005C18.0507 9.84005 19.4107 9.93007 20.7607 10.0301C20.9707 10.0401 21.1307 10.21 21.1307 10.42C21.1307 10.63 20.9907 10.8001 20.7807 10.8301C19.5707 10.9901 18.3407 11.06 17.1507 11.12C15.8007 11.19 14.4107 11.26 13.0707 11.48L15.1707 14.35C15.2707 14.49 15.2707 14.6901 15.1707 14.8301L15.0907 14.94C15.0307 15.03 14.9307 15.08 14.8207 15.1C14.7107 15.11 14.6107 15.0901 14.5207 15.0201C14.3107 14.8601 14.0907 14.7 13.8807 14.54C13.3807 14.16 12.8607 13.7601 12.3407 13.3901C12.1507 13.2601 11.9407 13.15 11.7107 13.04C11.6207 13.29 11.5407 13.53 11.5307 13.75C11.4907 14.31 11.4507 14.88 11.4107 15.44C11.2907 17.14 11.1607 18.9 10.9707 20.63C10.9507 20.83 10.7707 20.99 10.5707 20.99L10.5407 21ZM9.67068 12.0701C9.76068 12.0701 9.86068 12.09 9.95068 12.13C10.3507 12.31 10.4507 12.8 10.5007 13.31C10.5507 13.85 10.5907 14.39 10.6207 14.93C10.6507 14.52 10.6807 14.1 10.7107 13.69C10.7407 13.35 10.8507 13.04 10.9507 12.73C10.9907 12.61 11.0407 12.48 11.0707 12.36C11.1007 12.24 11.1907 12.15 11.3007 12.1C11.4107 12.05 11.5407 12.06 11.6407 12.11C11.7507 12.17 11.8607 12.2201 11.9807 12.2801C12.2507 12.4101 12.5207 12.54 12.7807 12.73C12.9107 12.82 13.0407 12.9101 13.1607 13.0101L12.1607 11.6501C12.0807 11.5401 12.0607 11.4001 12.1107 11.2701L12.2007 11.0101C12.2507 10.8801 12.3607 10.78 12.5007 10.75C13.2807 10.61 14.0607 10.5101 14.8507 10.4501C14.5307 10.4301 14.2007 10.4101 13.8807 10.3901C13.5607 10.3701 13.2507 10.3 12.8807 10.22C12.7007 10.18 12.5007 10.1401 12.2707 10.0901C12.1307 10.0601 12.0207 9.97007 11.9707 9.84007C11.9207 9.71007 11.9407 9.57006 12.0207 9.45006L13.1407 7.92003C13.0707 7.97003 13.0007 8.02005 12.9307 8.07005C12.7507 8.20005 12.5707 8.33007 12.3907 8.46007C12.0707 8.69007 11.6507 8.93005 11.2507 8.76005C10.8507 8.58005 10.7507 8.10007 10.7107 7.71007C10.6507 7.19007 10.6207 6.65006 10.5907 6.14006C10.5207 7.00006 10.4207 7.87005 10.2607 8.76005C10.2407 8.90005 10.1407 9.01004 10.0207 9.06004C9.90068 9.11004 9.75068 9.09005 9.64068 9.01005L7.97068 7.81004L9.10068 9.40007C9.17068 9.50007 9.19068 9.63004 9.16068 9.75004C9.12068 9.87004 9.03068 9.97005 8.91068 10.0101C8.04068 10.3201 7.22068 10.4101 6.43068 10.4501C6.81068 10.4801 7.20068 10.5001 7.58068 10.5301C7.87068 10.5501 8.14068 10.66 8.38068 10.75C8.48068 10.79 8.57068 10.83 8.67068 10.86C8.78068 10.89 8.86068 10.9701 8.91068 11.0701C8.96068 11.1701 8.96068 11.2901 8.91068 11.3901C8.87068 11.4801 8.84068 11.57 8.81068 11.67C8.73068 11.91 8.64068 12.1701 8.47068 12.4001C8.34068 12.5901 8.21068 12.7701 8.07068 12.9501C8.23068 12.8301 8.39068 12.7101 8.55068 12.5901L8.66068 12.5101C8.97069 12.2701 9.32068 12.0301 9.67068 12.0301V12.0701Z" fill="black"/>
        </svg>
      )
  }
};

export default Icon;
