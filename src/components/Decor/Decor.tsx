import "./Decor.scss";

export default function Decor() {

    return (
        <div className="decor" aria-hidden="true">
            {/* Веточка с листочками — верхний левый угол */}
            <svg className="decor__branch decor__branch--top-left"
                 viewBox="0 0 200 200" fill="none">
                <path d="M10 190 C 60 150, 90 100, 150 30"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M40 160 C 70 155, 85 140, 90 115"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M70 120 C 100 115, 115 100, 120 75"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M100 85 C 130 80, 145 65, 150 40"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                {/* Листочки */}
                <path d="M90 115 C 70 100, 60 85, 75 75 C 90 85, 95 100, 90 115Z"
                      fill="currentColor" opacity=".5"/>
                <path d="M120 75 C 100 60, 90 45, 105 35 C 120 45, 125 60, 120 75Z"
                      fill="currentColor" opacity=".5"/>
                <path d="M150 40 C 130 25, 120 10, 135 0 C 150 10, 155 25, 150 40Z"
                      fill="currentColor" opacity=".5"/>
            </svg>

            {/* Веточка с листочками — нижний правый угол */}
            <svg className="decor__branch decor__branch--bottom-right"
                 viewBox="0 0 200 200" fill="none">
                <path d="M190 10 C 140 50, 110 100, 50 170"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M160 40 C 130 45, 115 60, 110 85"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M130 80 C 100 85, 85 100, 80 125"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M100 115 C 70 120, 55 135, 50 160"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                {/* Листочки */}
                <path d="M110 85 C 130 100, 140 115, 125 125 C 110 115, 105 100, 110 85Z"
                      fill="currentColor" opacity=".5"/>
                <path d="M80 125 C 100 140, 110 155, 95 165 C 80 155, 75 140, 80 125Z"
                      fill="currentColor" opacity=".5"/>
                <path d="M50 160 C 70 175, 80 190, 65 200 C 50 190, 45 175, 50 160Z"
                      fill="currentColor" opacity=".5"/>
            </svg>

            {/* Цветочек — верхний правый */}
            <svg className="decor__flower decor__flower--top-right"
                 viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="8" fill="currentColor" opacity=".9"/>
                <ellipse cx="50" cy="28" rx="10" ry="16" fill="currentColor" opacity=".45"/>
                <ellipse cx="50" cy="72" rx="10" ry="16" fill="currentColor" opacity=".45"/>
                <ellipse cx="28" cy="50" rx="16" ry="10" fill="currentColor" opacity=".45"/>
                <ellipse cx="72" cy="50" rx="16" ry="10" fill="currentColor" opacity=".45"/>
                <ellipse cx="34" cy="34" rx="10" ry="14" fill="currentColor" opacity=".45"/>
                <ellipse cx="66" cy="66" rx="10" ry="14" fill="currentColor" opacity=".45"/>
                <ellipse cx="66" cy="34" rx="10" ry="14" fill="currentColor" opacity=".45"/>
                <ellipse cx="34" cy="66" rx="10" ry="14" fill="currentColor" opacity=".45"/>
            </svg>

            {/* Цветочек — нижний левый */}
            <svg className="decor__flower decor__flower--bottom-left"
                 viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="8" fill="currentColor" opacity=".9"/>
                <ellipse cx="50" cy="28" rx="10" ry="16" fill="currentColor" opacity=".45"/>
                <ellipse cx="50" cy="72" rx="10" ry="16" fill="currentColor" opacity=".45"/>
                <ellipse cx="28" cy="50" rx="16" ry="10" fill="currentColor" opacity=".45"/>
                <ellipse cx="72" cy="50" rx="16" ry="10" fill="currentColor" opacity=".45"/>
                <ellipse cx="34" cy="34" rx="10" ry="14" fill="currentColor" opacity=".45"/>
                <ellipse cx="66" cy="66" rx="10" ry="14" fill="currentColor" opacity=".45"/>
                <ellipse cx="66" cy="34" rx="10" ry="14" fill="currentColor" opacity=".45"/>
                <ellipse cx="34" cy="66" rx="10" ry="14" fill="currentColor" opacity=".45"/>
            </svg>

            {/* Разбросанные маленькие листочки */}
            <svg className="decor__leaf decor__leaf--1" viewBox="0 0 40 40" fill="none">
                <path d="M20 2 C 34 10, 36 28, 20 38 C 4 28, 6 10, 20 2Z"
                      fill="currentColor" opacity=".35"/>
                <path d="M20 2 C 20 14, 20 26, 20 38" stroke="currentColor"
                      strokeWidth="1" opacity=".5"/>
            </svg>

            <svg className="decor__leaf decor__leaf--2" viewBox="0 0 40 40" fill="none">
                <path d="M20 2 C 34 10, 36 28, 20 38 C 4 28, 6 10, 20 2Z"
                      fill="currentColor" opacity=".3"/>
                <path d="M20 2 C 20 14, 20 26, 20 38" stroke="currentColor"
                      strokeWidth="1" opacity=".5"/>
            </svg>

            <svg className="decor__leaf decor__leaf--3" viewBox="0 0 40 40" fill="none">
                <path d="M20 2 C 34 10, 36 28, 20 38 C 4 28, 6 10, 20 2Z"
                      fill="currentColor" opacity=".35"/>
                <path d="M20 2 C 20 14, 20 26, 20 38" stroke="currentColor"
                      strokeWidth="1" opacity=".5"/>
            </svg>

            <svg className="decor__leaf decor__leaf--4" viewBox="0 0 40 40" fill="none">
                <path d="M20 2 C 34 10, 36 28, 20 38 C 4 28, 6 10, 20 2Z"
                      fill="currentColor" opacity=".3"/>
                <path d="M20 2 C 20 14, 20 26, 20 38" stroke="currentColor"
                      strokeWidth="1" opacity=".5"/>
            </svg>

            <svg className="decor__leaf decor__leaf--5" viewBox="0 0 40 40" fill="none">
                <path d="M20 2 C 34 10, 36 28, 20 38 C 4 28, 6 10, 20 2Z"
                      fill="currentColor" opacity=".35"/>
                <path d="M20 2 C 20 14, 20 26, 20 38" stroke="currentColor"
                      strokeWidth="1" opacity=".5"/>
            </svg>
        </div>
    );

}