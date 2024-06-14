import { Gallery } from '@/types/gallery';
import parseDate from '@/utils/parseDate';
import * as S from './styles';

const Ticket = ({
  thumbnail,
  title,
  startDate,
  endDate,
  fee,
  hashtags,
}: Omit<Gallery, 'galleryId'>) => {
  console.log(hashtags);
  return (
    <S.TicketContainer>
      <S.TicketSVG width="903" height="295" viewBox="0 0 903 295" fill="none">
        <path
          d="M389.581 294.04C267.801 294.04 146.011 294.04 24.2307 294.05C16.8707 294.05 17.3107 293.53 15.9407 288.2C14.4307 282.32 10.0607 278.82 4.32068 277.54C0.920683 276.78 -0.0293164 275.17 0.000683593 271.98C0.110684 262.21 0.0306836 252.43 0.0306836 242.66C0.0306836 170.38 0.0306836 98.11 0.0306836 25.83C0.0306836 24.16 0.0906836 22.49 0.0606836 20.81C0.0206836 18.56 0.950684 17.3 3.28068 16.79C10.5007 15.21 15.1807 10.95 16.5807 3.53C17.0507 1.08 18.4107 0 20.8507 0.04C22.3907 0.07 23.9407 0 25.4807 0C268.271 0 511.071 0 753.861 0C755.151 0 756.441 0.05 757.721 0.03C760.271 -0.02 761.581 1.04 762.251 3.68C764.391 12.15 770.451 16.93 778.481 16.9C786.441 16.87 792.061 12.36 794.301 3.79C795.021 1.03 796.431 0 799.151 0C826.441 0.04 853.731 0.03 881.021 0C883.721 0 885.141 0.97 885.791 3.83C887.361 10.7 891.791 15.14 898.691 16.67C901.601 17.31 902.531 18.83 902.461 21.48C902.431 22.76 902.481 24.05 902.481 25.34C902.481 106.49 902.481 187.64 902.481 268.79C902.481 270.08 902.411 271.36 902.461 272.65C902.551 275.37 901.441 276.77 898.601 277.39C892.161 278.78 887.601 282.83 886.121 289.19C885.151 293.38 883.041 294.11 879.381 294.08C862.261 293.97 845.141 294.03 828.021 294.03C818.621 294.03 809.221 293.96 799.831 294.05C796.691 294.08 794.971 293.13 794.161 289.76C792.221 281.66 786.281 277.12 778.391 277.11C770.511 277.11 764.251 281.95 762.331 290.05C761.611 293.09 760.081 294.09 757.251 294C755.191 293.93 753.131 294.01 751.071 294.01C630.581 294.01 510.081 294.01 389.591 294.01L389.581 294.04ZM900.701 147.08C900.701 106.19 900.671 65.29 900.761 24.4C900.761 20.83 899.891 18.81 896.161 17.67C890.581 15.96 886.491 11.99 884.831 6.4C883.651 2.41 881.421 1.69 877.761 1.71C859.351 1.84 840.951 1.77 822.541 1.77C815.331 1.77 808.121 1.84 800.921 1.75C798.101 1.72 796.321 2.5 795.671 5.56C795.281 7.39 794.381 9.24 793.281 10.77C789.231 16.38 783.651 19.46 776.701 18.68C769.011 17.81 763.641 13.35 761.141 6.02C760.101 2.96 758.641 1.42 755.371 1.77C754.221 1.89 753.061 1.78 751.901 1.78C510.551 1.78 269.191 1.78 27.8407 1.78C26.1707 1.78 24.4907 1.86 22.8207 1.78C20.0807 1.65 18.6607 2.81 17.9407 5.55C16.4807 11.12 12.9207 15.46 7.50068 17.1C2.34068 18.66 1.78068 21.72 1.78068 26.27C1.88068 106.77 1.85068 187.27 1.85068 267.77C1.85068 269.06 1.50068 270.51 1.97068 271.59C2.66068 273.15 3.68068 275.19 5.06068 275.71C11.6707 278.18 16.1907 282.32 18.3207 289.19C18.7207 290.47 20.6307 291.67 22.0807 292.12C23.7307 292.63 25.6507 292.27 27.4507 292.27C157.841 292.27 288.241 292.27 418.631 292.27C530.361 292.27 642.091 292.25 753.821 292.33C757.761 292.33 760.101 291.56 761.461 287.31C763.691 280.34 772.341 274.11 778.541 274.9C786.061 275.85 793.191 279.58 795.641 288.38C796.441 291.27 797.891 292.3 800.801 292.3C826.931 292.24 853.061 292.24 879.191 292.3C882.081 292.3 883.631 291.3 884.481 288.46C886.211 282.7 889.971 278.34 895.691 276.58C899.931 275.28 900.771 272.96 900.761 268.99C900.651 228.35 900.691 187.72 900.691 147.08H900.701Z"
          fill="black"
        />
        <path
          d="M778.539 269.96V24.1299"
          stroke="black"
          strokeWidth="0.58"
          strokeMiterlimit="10"
        />
        <path
          d="M828.21 167.479C822.97 167.479 817.73 167.479 812.5 167.479V174.439C831.08 174.439 849.67 174.439 868.25 174.469V167.479C858.29 167.479 848.33 167.479 838.36 167.479C834.98 167.479 831.59 167.479 828.21 167.479Z"
          fill="black"
        />
        <path
          d="M812.492 207.5C821.102 207.5 829.712 207.5 838.322 207.5C838.322 207.5 842.492 207.5 842.492 207.51C852.472 207.51 858.272 207.51 868.252 207.51V202.4C849.672 202.38 831.082 202.37 812.502 202.36V207.48L812.492 207.5Z"
          fill="black"
        />
        <path
          d="M812.492 91.8201C821.012 91.8201 829.522 91.8301 838.042 91.8301V91.8601C848.112 91.8601 858.182 91.8601 868.252 91.8601V87.0801C849.672 87.0801 831.082 87.0801 812.502 87.0801V91.8201H812.492Z"
          fill="black"
        />
        <path
          d="M812.49 122.02V126.71C831.07 126.71 849.66 126.7 868.24 126.69V122.01C858.28 122.01 848.33 122.01 838.37 122.01C829.74 122.01 821.11 122.01 812.48 122.01L812.49 122.02Z"
          fill="black"
        />
        <path
          d="M812.492 232.71C822.672 232.71 832.852 232.71 843.032 232.71C843.032 232.71 843.032 232.72 843.032 232.73C851.432 232.73 859.842 232.73 868.242 232.73V229.16C849.662 229.16 831.072 229.16 812.492 229.16V232.71Z"
          fill="black"
        />
        <path
          d="M812.492 148.05C821.012 148.05 829.522 148.05 838.042 148.05C848.112 148.05 858.182 148.05 868.242 148.04V144.94C849.662 144.94 831.072 144.93 812.492 144.92V148.05Z"
          fill="black"
        />
        <path
          d="M812.492 213.53C820.992 213.53 829.492 213.53 837.992 213.53C837.992 213.55 839.492 213.49 839.492 213.51C849.582 213.51 858.162 213.59 868.252 213.59V210.66C849.672 210.66 831.082 210.67 812.502 210.7V213.52L812.492 213.53Z"
          fill="black"
        />
        <path
          d="M838.332 109.25C829.722 109.25 821.112 109.25 812.492 109.25V112.17C831.072 112.17 849.662 112.16 868.242 112.15V109.26C858.272 109.26 848.292 109.26 838.322 109.26L838.332 109.25Z"
          fill="black"
        />
        <path
          d="M812.492 186.07V188.68C822.992 188.68 833.482 188.69 843.982 188.69C852.072 188.69 860.162 188.69 868.242 188.69V186.07C858.352 186.07 848.462 186.07 838.572 186.07C829.882 186.07 821.182 186.07 812.492 186.07Z"
          fill="black"
        />
        <path
          d="M812.492 198.81C821.112 198.81 829.732 198.81 838.352 198.81C848.322 198.81 858.282 198.81 868.252 198.81V196.03C849.672 196.03 831.082 196.04 812.502 196.07V198.8L812.492 198.81Z"
          fill="black"
        />
        <path
          d="M838.302 101.11C829.702 101.11 821.102 101.11 812.492 101.11V103.82C827.322 103.82 842.162 103.83 856.992 103.82C860.742 103.82 864.492 103.82 868.252 103.81V101.12C858.272 101.12 848.292 101.12 838.302 101.12V101.11Z"
          fill="black"
        />
        <path d="M812.492 244.71H868.242V244.07H812.492V244.71Z" fill="black" />
        <path d="M812.492 54.4802H868.242V53.9502H812.492V54.4802Z" fill="black" />
        <path d="M812.492 49.3799V49.8599H868.242V49.3799H812.492Z" fill="black" />
        <path d="M812.492 160.54H868.242V160.06H812.492V160.54Z" fill="black" />
        <path d="M812.492 77.03H868.242V76.5H812.492V77.03Z" fill="black" />
        <path d="M812.492 116.58H868.242V116.01H812.492V116.58Z" fill="black" />
        <path d="M812.492 83.4004H868.242V82.8604H812.492V83.4004Z" fill="black" />
        <path d="M812.492 226.18H868.242V225.83H812.492V226.18Z" fill="black" />
        <path d="M812.492 182H868.242V181.54H812.492V182Z" fill="black" />
        <path d="M812.492 68.5603H868.242V68.1104H812.492V68.5603Z" fill="black" />
        <path d="M812.492 156.39H868.242V156H812.492V156.39Z" fill="black" />
        <path d="M812.492 240.29H868.242V240.01H812.492V240.29Z" fill="black" />
        <path d="M812.492 60.44H868.242V60.04H812.492V60.44Z" fill="black" />
        <path d="M812.492 151.8H868.242V151.34H812.492V151.8Z" fill="black" />
        <path d="M812.492 98.0303H868.242V97.6104H812.492V98.0303Z" fill="black" />
        <path d="M812.492 141.12H868.242V140.74H812.492V141.12Z" fill="black" />
        <path d="M812.492 219.65H868.242V219.27H812.492V219.65Z" fill="black" />
        <path d="M812.492 178.47H868.242V178.06H812.492V178.47Z" fill="black" />
        <path d="M812.492 132.88H868.242V132.56H812.492V132.88Z" fill="black" />
        <path d="M352.492 1.70996V294.04" stroke="black" strokeMiterlimit="10" />
      </S.TicketSVG>
      <S.Title typography="t4" bold="regular">
        {title}
      </S.Title>
      <S.Date typography="t5" bold="regular">
        {parseDate(startDate)} - {parseDate(endDate as Date)}
      </S.Date>
      <S.HashTags typography="t5" bold="regular">
        {hashtags.map((tag) => `#${tag}`).join(' ')}
      </S.HashTags>
      <S.Fee typography="t5" bold="regular">
        ₩ {fee}
      </S.Fee>
      <S.Thumbnail profileImage={thumbnail} />
    </S.TicketContainer>
  );
};

export default Ticket;
