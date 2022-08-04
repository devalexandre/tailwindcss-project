import './styles/index.css';
import { h } from 'preact';
import { ThemeProvider , Button } from "@material-tailwind/react";


const App = () =>
<ThemeProvider>
    <div class="template">
        <header class="header">
         <h1>Template Tailwind for Preact</h1>
        </header>
            <section class="main">
              
                    <a class="btn btn-primary" href="https://github.com/devalexandre/tailwindcss-project">
                        <span>follow us on git</span> 
                    <svg width="24" height="24" fill="currentColor" 
                    ><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" /></svg>
                    </a>
                   
     
            </section>
        <footer class="footer">
          <div class="text-footer">
                <span>Create with</span>
                <span class="heart">
                    <svg class="heart" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                </span>
               <Button>Alexandre E Souza</Button>
               </div>
        </footer>
    </div>
    </ThemeProvider>


export default App;
