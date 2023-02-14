import styled from "styled-components";

export const ReportMonth = styled.div`
    background-color: #E6E6E6;
    width: 100%;
    height: 100vh;
    padding: 20px 0;
    overflow: scroll;

    .reportMonth {
        &__container {
            max-width: 795px;
            margin: 0 auto;
            background-color: #fff;
            min-height: calc(100vh - 40px);
            padding: 100px 20px 100px 90px;
        }
    }

    .report-header {
        display: flex;
        justify-content: space-between;
    }

    .report-info {
        text-align: center;
    
        &__name {
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
        }

        &__unit {
            font-size: 14px;
            font-weight: 800;
            text-transform: uppercase;
        }

        &__number {
            span {
                text-transform: uppercase;
                font-weight: 500;
                padding-left: 15px;
            }
        }
    }

    .report-national {
        text-align: center;

        &__title {
            font-size: 14px;
            font-weight: 800;
            text-transform: uppercase;
        }

        &__detail {
            font-size: 14px;
            font-weight: 800;
            border-bottom: 1px solid #000;
            display: inline-block;
            padding-bottom: 5px;
        }

        &__location {
            font-size: 14px;
        }
    }

    .report-content {
        padding-top: 15px;
        padding-left: 40px;
        padding-right: 40px;
    
        &__report,  &__name {
            text-align: center;
            font-size: 14px;
            font-weight: 800;
        }

        &__name {
            margin-bottom: 45px;
        }
    }

    .highlight {
        &__title {
            padding-top: 25px;
            font-size: 15px;
            font-weight: bold;
        }

        &__noti {
            color: #FA1818;
        }

        ul {
            list-style: none;
            
            li {
                position: relative;
                padding-bottom: 15px;

                span {
                    font-weight: bold;
                }

                &:before {
                    position: absolute;
                    display: block;
                    content: '–';
                    width: 15px;
                    height: 100%;
                    left: -12px;
                }
            }
        }
    }

    .listChild {
        &__item {
            position: relative;
            padding-left: 45px;

            &:before {
                position: absolute;
                display: block;
                content: '';
                width: 10px;
                height: 10px;
                left: 20px;
                border-radius: 50%;
                top: 9px;
                border: 1px solid #000;
            }

            &--haspd {
                padding-left: 20px;

                &:before {
                    display: none;
                }
            }
        }
    }
    
`