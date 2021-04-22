import { createGlobalStyle } from "styled-components";

const breakpoints = [320, 1024, 1440];
export const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const colors = {
    primary: "#E0E0E0",
    secondary: "#E5E5E5",
    header: "#F2994A",
    headerTitle: "#F2F2F2",
    accent: "#C4C4C4",
    background: "#F2F2F2",
    text: "#333333",
    textSecondary: "#828282",
    textTasks: "#4F4F4f",
};

export const widths = {
    desktopPageWidth: 1440,
    tabletPageWidth: 1024,
    phonePageWitdh: 320,
};

/** Global Style component **/
export const GlobalStyle = createGlobalStyle`
    body {
      font-family: -apple-system,"Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
        margin: 0;
        padding: 0 calc(0.7% - (100vw - 100%)) 0 0;
        background: ${colors.background};
        }
    html, body {
        height: 100%;
        width: 100%;
    }
    * {
        box-sizing: border-box;
    }
    h1, h2, h3 {
        margin: 0;
        font-weight: 700;
    }
`;

/** svgs **/
export const plus = (
    <svg
        width="32"
        height="32"
        viewBox="-4 -6 26 26"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.5 0.5C9.5 0.223858 9.27614 0 9 0C8.72386 0 8.5 0.223858 8.5 0.5V8.5H0.5C0.223858 8.5 0 8.72386 0 9C0 9.27614 0.223858 9.5 0.5 9.5H8.5V17.5C8.5 17.7761 8.72386 18 9 18C9.27614 18 9.5 17.7761 9.5 17.5V9.5H17.5C17.7761 9.5 18 9.27614 18 9C18 8.72386 17.7761 8.5 17.5 8.5H9.5V0.5Z"
            fill="#828282"
        />
    </svg>
);

export const plus_sm = (
    <svg
        width="20"
        height="20"
        viewBox="-2.5 -5 26 26"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.5 0.5C9.5 0.223858 9.27614 0 9 0C8.72386 0 8.5 0.223858 8.5 0.5V8.5H0.5C0.223858 8.5 0 8.72386 0 9C0 9.27614 0.223858 9.5 0.5 9.5H8.5V17.5C8.5 17.7761 8.72386 18 9 18C9.27614 18 9.5 17.7761 9.5 17.5V9.5H17.5C17.7761 9.5 18 9.27614 18 9C18 8.72386 17.7761 8.5 17.5 8.5H9.5V0.5Z"
            fill="#828282"
        />
    </svg>
);

export const sample = (
    <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 15C3 21.6274 8.37258 27 15 27C21.6274 27 27 21.6274 27 15C27 8.37258 21.6274 3 15 3C8.37258 3 3 8.37258 3 15ZM25 15C25 20.5228 20.5228 25 15 25C9.47715 25 5 20.5228 5 15C5 9.47715 9.47715 5 15 5C20.5228 5 25 9.47715 25 15Z"
            fill="#333333"
        />
    </svg>
);

export const sample_sm = (
    <svg width="19" height="19" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 15C3 21.6274 8.37258 27 15 27C21.6274 27 27 21.6274 27 15C27 8.37258 21.6274 3 15 3C8.37258 3 3 8.37258 3 15ZM25 15C25 20.5228 20.5228 25 15 25C9.47715 25 5 20.5228 5 15C5 9.47715 9.47715 5 15 5C20.5228 5 25 9.47715 25 15Z"
            fill="#333333"
        />
    </svg>
);

export const exlude = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM18.0755 9.61647L10.2279 17.7187L5.87037 13.22C5.81508 13.1643 5.65915 13.0042 5.56323 12.7252C5.50806 12.5648 5.47634 12.3625 5.52154 12.1377C5.56719 11.9107 5.68426 11.6959 5.87152 11.5025C6.05842 11.3096 6.27018 11.1846 6.4996 11.1355C6.72737 11.0866 6.93203 11.1212 7.0926 11.18C7.27754 11.2478 7.4502 11.3621 7.58439 11.5067L10.2279 14.236L16.3866 7.87756C16.5379 7.73658 16.7158 7.62755 16.9124 7.56221C17.0736 7.50866 17.2791 7.47591 17.5063 7.52186C17.7381 7.56871 17.9557 7.6901 18.1464 7.88692C18.3368 8.08351 18.452 8.30578 18.488 8.54222C18.5233 8.77423 18.4761 8.97907 18.4106 9.13641C18.2979 9.40698 18.1345 9.5615 18.0755 9.61647Z"
            fill="#333333"
        />
    </svg>
);

export const exlude_sm = (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM18.0755 9.61647L10.2279 17.7187L5.87037 13.22C5.81508 13.1643 5.65915 13.0042 5.56323 12.7252C5.50806 12.5648 5.47634 12.3625 5.52154 12.1377C5.56719 11.9107 5.68426 11.6959 5.87152 11.5025C6.05842 11.3096 6.27018 11.1846 6.4996 11.1355C6.72737 11.0866 6.93203 11.1212 7.0926 11.18C7.27754 11.2478 7.4502 11.3621 7.58439 11.5067L10.2279 14.236L16.3866 7.87756C16.5379 7.73658 16.7158 7.62755 16.9124 7.56221C17.0736 7.50866 17.2791 7.47591 17.5063 7.52186C17.7381 7.56871 17.9557 7.6901 18.1464 7.88692C18.3368 8.08351 18.452 8.30578 18.488 8.54222C18.5233 8.77423 18.4761 8.97907 18.4106 9.13641C18.2979 9.40698 18.1345 9.5615 18.0755 9.61647Z"
            fill="#333333"
        />
    </svg>
);

export const elipse = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#333333" />
    </svg>
);

export const down_arrow = (
    <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.405173 0.887931C0.605139 0.697488 0.921627 0.705207 1.11207 0.905172L10.75 11.025L20.3879 0.905172C20.5784 0.705207 20.8949 0.697488 21.0948 0.887931C21.2948 1.07837 21.3025 1.39486 21.1121 1.59483L11.1121 12.0948C11.0177 12.1939 10.8868 12.25 10.75 12.25C10.6132 12.25 10.4823 12.1939 10.3879 12.0948L0.387932 1.59483C0.197489 1.39486 0.205208 1.07837 0.405173 0.887931Z"
            fill="#333333"
        />
    </svg>
);

export const right_arrow = (
    <svg width="22" height="20" viewBox="0 0 8 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.310347 16.8759C0.157993 16.7159 0.164168 16.4627 0.324141 16.3103L8.42 8.6L0.324141 0.889656C0.164168 0.737301 0.157993 0.48411 0.310347 0.324139C0.462702 0.164167 0.715892 0.157992 0.875865 0.310346L9.27586 8.31034C9.35514 8.38584 9.4 8.49053 9.4 8.6C9.4 8.70947 9.35514 8.81416 9.27586 8.88966L0.875865 16.8897C0.715892 17.042 0.462702 17.0358 0.310347 16.8759Z"
            fill="#333333"
        />
    </svg>
);

export const left_arrow = (
    <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.3621 0.155173C11.5525 0.355139 11.5448 0.671627 11.3448 0.86207L1.225 10.5L11.3448 20.1379C11.5448 20.3284 11.5525 20.6449 11.3621 20.8448C11.1716 21.0448 10.8551 21.0525 10.6552 20.8621L0.155172 10.8621C0.0560825 10.7677 0 10.6368 0 10.5C0 10.3632 0.0560825 10.2323 0.155172 10.1379L10.6552 0.137932C10.8551 -0.0525111 11.1716 -0.0447918 11.3621 0.155173Z"
            fill="#333333"
        />
    </svg>
);

export const trash_bin = (
    <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5 2.18182H16.875C17.4963 2.18182 18 2.67023 18 3.27273H0C0 2.67023 0.50368 2.18182 1.125 2.18182H4.5C4.5 0.976833 5.50736 0 6.75 0H11.25C12.4926 0 13.5 0.976833 13.5 2.18182ZM1.06581 4.27705H16.8949L16.1053 22.6255C16.1053 22.6255 15.8073 24 14.6838 24H3.31533C2.19223 24 1.89428 22.6255 1.89428 22.6255L1.06581 4.27705ZM13.3875 6.54546H12.2625L11.7 22.2957H12.825L13.3875 6.54546ZM6.18751 22.2957L5.6252 6.54546H4.50001L5.06232 22.2957H6.18751ZM8.43751 6.54546V22.2957H9.56251V6.54546H8.43751Z"
            fill="#333333"
        />
    </svg>
);

export const pen = (
    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.4142 1.41421C16.6332 0.633165 15.3668 0.633165 14.5858 1.41421L13.1716 2.82843L16.7071 6.36396L18.1213 4.94975C18.9024 4.1687 18.9024 2.90237 18.1213 2.12132L17.4142 1.41421ZM1.04539 15.4815L0.443651 19.0919L4.05408 18.4901C4.46526 18.4216 4.84474 18.2263 5.1395 17.9316L16 7.07107L12.4645 3.53553L1.60396 14.396C1.30921 14.6908 1.11392 15.0703 1.04539 15.4815Z"
            fill="#333333"
        />
    </svg>
);

export const pen_sm = (
    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.7314 1.13137C13.1065 0.506532 12.0935 0.506532 11.4686 1.13137L10.3373 2.26274L13.1657 5.09117L14.2971 3.9598C14.9219 3.33496 14.9219 2.32189 14.2971 1.69706L13.7314 1.13137ZM0.636317 12.3852L0.154926 15.2735L3.04327 14.7921C3.37221 14.7373 3.6758 14.5811 3.9116 14.3453L12.6 5.65685L9.77158 2.82843L1.08318 11.5168C0.847372 11.7526 0.69114 12.0562 0.636317 12.3852Z"
            fill="#333333"
        />
    </svg>
);

export const cross = (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.11867 23.2855C5.96044 23.449 5.96044 23.7139 6.11867 23.8774C6.2769 24.0408 6.53343 24.0408 6.69166 23.8774L15 15.2959L23.3083 23.8774C23.4666 24.0408 23.7231 24.0408 23.8813 23.8774C24.0396 23.714 24.0396 23.449 23.8813 23.2856L15.573 14.7041L23.3084 6.7144C23.4666 6.55097 23.4666 6.286 23.3084 6.12257C23.1501 5.95914 22.8936 5.95914 22.7354 6.12257L15 14.1123L7.26463 6.12261C7.1064 5.95918 6.84986 5.95918 6.69164 6.12261C6.53341 6.28604 6.53341 6.55101 6.69164 6.71444L14.427 14.7041L6.11867 23.2855Z"
            fill="#333333"
        />
    </svg>
);

export const trash_delete = (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            opacity="0.8"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.1047 5.80531V5.18086C12.1047 4.83799 12.4463 4.5585 12.8656 4.5585H17.1355C17.5558 4.5585 17.8974 4.83799 17.8974 5.18086V5.80531H12.1047ZM21.3532 7.36278C21.2642 9.71613 20.7129 24.1355 20.6434 24.7848C20.6025 25.1734 20.4613 25.3646 20.3857 25.4415H9.61533C9.53862 25.3646 9.39851 25.1734 9.3576 24.7848C9.28908 24.1355 8.67237 9.72652 8.57214 7.36278H21.3532ZM19.4253 5.80532V5.18087C19.4253 3.9777 18.467 3 17.2878 3H12.7132C11.534 3 10.5757 3.9777 10.5757 5.18087V5.80532H6V7.36279H7.04318L7.83682 25.3511C7.85011 25.4176 8.19068 27 9.50898 27H20.49C21.8093 27 22.1499 25.4176 22.1703 25.3002L22.92 7.36279H24V5.80532H19.4253ZM19.1141 8.61083H17.5851L17.1086 24.1949H18.6375L19.1141 8.61083ZM14.2353 24.1951H15.7643V8.61105H14.2353V24.1951ZM12.8913 24.1949L12.4147 8.61083H10.8857L11.3613 24.1949H12.8913Z"
            fill="#333333"
        />
    </svg>
);