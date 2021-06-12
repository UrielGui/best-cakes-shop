import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    ::-webkit-scrollbar {
    width: 13px;
    }
    ::-webkit-scrollbar-track {
    background: #ffffff;
    }
    ::-webkit-scrollbar-thumb {
    background: #b10f84;
    }
    ::-webkit-scrollbar-thumb:hover {
    background: #a01379;
    }

	.grid {
		display: grid;
	}
	
	.nav {
		grid-area: nav;
	}
	
	.content {
		grid-area: content;
        min-height: 100vh;
	}
	
	.sidenav {
		grid-area: sidenav;
	}
	
	.footer {
		grid-area: footer;
        position: sticky
	}
	
	.grid-template-areas {
		grid-template-columns: 20% 80% 0%;
        grid-template-rows: auto;
        grid-template-areas:
        "nav nav"
        "sidenav content"
        "footer footer";
	}
    
    body {
        background: linear-gradient(270deg,#772064 20%,#ffffff 48%);
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    button {
        text-decoration: none;
        border: 0;
        cursor: pointer;
    }

    .Toastify__toast--success {
        background: #2e886f;
        text-align: center;
        border-radius: 10px;
    }

    .Toastify__toast--info {
        background: #e91e63;
        text-align: center;
        border-radius: 10px;
    }

    .Toastify__toast-body, .Toastify__toast {
        padding: 0;
        min-height: 0px;
    }

    .Toastify__toast-container {
        width: 250px;
    }
    
`;

export const Container = styled.div`
    padding-left: 3.75rem;
    padding-right: 3.75rem;
`;