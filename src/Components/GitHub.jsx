import { useState } from "react";
import { GitHubCalendar } from "react-github-calendar"; 

function GitHub() {
    const customGreenTheme = {
        dark: [
            '#111113', 
            '#004d35', 
            '#007d57', 
            '#2ee6a8', 
            '#00dd99'  
        ],
    };

    return (
        <section>
            <div className="about">
                <div 
                    className="contact-info github-chart-wrapper" 
                    style={{
                        borderRadius: 'var(--radius-sm)',
                        maxWidth: '850px',
                        margin: '0 auto',
                        color: 'var(--text-primary)',
                        overflowX: 'auto' // Prevents layout break if screen gets tiny
                    }}
                >
                    <div className="github-chart-scroll">
                        <GitHubCalendar 
                            username="ayushxpundir" 
                            colorScheme="dark"
                            theme={customGreenTheme}
                            // Adjust square dimensions slightly for cleaner scaling
                            blockSize={12}
                            blockMargin={4}
                            labels={{
                                totalCount: '{{count}} contributions in the last year',
                            }}
                        />
                    </div>
                </div>
            </div>
            
            {/* Global Scoped CSS to inject fluid typography rules */}
            <style>{`
                /* Targets the total contribution count heading text */
                .react-github-calendar__title {
                    font-size: clamp(0.85rem, 2.5vw, 1.1rem) !important;
                    margin-bottom: 12px !important;
                    color: var(--text-primary) !important;
                }

                /* Targets the month labels, weekday labels, and "Less/More" legend footer text */
                .react-github-calendar__chart text,
                .react-github-calendar__meta {
                    font-size: clamp(0.7rem, 2vw, 0.85rem) !important;
                    fill: var(--text-muted) !important;
                    color: var(--text-muted) !important;
                }
            `}</style>
        </section>
    );
}

export default GitHub;