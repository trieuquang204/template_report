
import { ReportMonth } from "./styled";

function Template() {
  return (
    <ReportMonth className="reportMonth">
        <div className="reportMonth__container">
            <div className="report-header">
                <div className="report-info">
                    <h2 className="report-info__name">TẬP ĐOÀN CÔNG NGHIỆP -VIỄN THÔNG QUÂN ĐỘI</h2>
                    <h1 className="report-info__unit">ĐƠN VỊ</h1>
                    <p className="report-info__number">Số: <span>/BC-CNTT</span> </p>
                </div>
                <div className="report-national">
                    <h2 className="report-national__title">CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</h2>
                    <h4 className="report-national__detail">Độc lập - Tự do - Hạnh phúc</h4>
                    <p className="report-national__location">Hà Nội, ngày  tháng 8 năm 2022 </p>
                </div>
            </div>

            <div className="report-content">
                <h2 className="report-content__report">BÁO CÁO</h2>
                <h4 className="report-content__name">Ngành Công nghệ thông tin tháng 7 năm 2022 </h4>
                <p className="text-center mb-2">Kính gửi: Ban Công nghệ thông tin.</p>
                <p className="textCommon">Tổng Công ty Viễn thông (VTT) (5) báo cáo kết quả nhiệm vụ tháng …/… (6), cụ thể như sau:</p>

                <div className="highlight">
                    <h5 className="highlight__title">1. Lĩnh vực chuyển đổi số</h5>
                    <ul className="mb-0">
                        <li> <span>0123% (số tuyệt đối 0456/ 0789)</span> quy trình trong đã được số hóa, tăng (hoặc giảm) 0123% so với tháng trước.</li>
                        <li> <span>0123% (số tuyệt đối 0456/ 0789)</span> (8) quy trình trong đã được tự động hóa, tăng (hoặc giảm) 0123% so với tháng trước.</li>
                        <li>Tính đến hiện tại <span>0123% (số tuyệt đối 0456/ 0789)</span> (9) ứng dụng đã được chuyển đổi sang Cơ sở dữ liệu mã nguồn mở, tăng (hoặc giảm) <span>0123%</span> (10) so với tháng trước.</li>
                        <li>Tính đến hiện tại <span>0123% (số tuyệt đối 0456/ 0789)</span> (11) ứng dụng phù hợp với kiến trúc Microservice đã được chuyển đổi sang kiến trúc Microservice, tăng (hoặc giảm) <span>0123% </span>(12) so với tháng trước.</li>
                        <p className="mb-0">(Chi tiết trong Ph lục 01: Danh sách quy trình chuyển đổi số và phụ lục 04: Danh sách phần mềm CNTT)</p>
                    </ul>

                    <h5 className="highlight__title">2. Lĩnh vực Quản lý dữ liệu (Data Management - DM)</h5>
                    <ul>
                        <li> Tích hợp các tiêu chuẩn dữ liệu vào hệ thống Điều hành dữ liệu tập trung Data Operation Center – DOC
                            <div className="listChild">
                                <div className="listChild__item">Đã tích hợp lũy kế …(13) hệ thống vào hệ thống DOC; trong đó có … (14) hệ thống tích hợp mới trong tháng</div>
                                <div className="listChild__item">Khai báo mới … (15) CDE … (16) luật đánh giá trong tháng, trong đó:
                                    <div className="listChild__item listChild__item--haspd">
                                        <p className="mb-0">Trong đó: </p>
                                        <p className="mb-0">…(17) luật giám sát theo tiêu chuẩn Data Quality</p>
                                        <p className="mb-0">…(18) luật giám sát theo tiêu chuẩn Data Security</p>
                                    </div>
                                </div>
                                <div className="listChild__item">Tỉ lệ số CDE đã có luật giám sát/ tổng số CDE lũy kế đạt: … (19) %</div>
                            </div>
                        </li>
                    </ul>

                    <h5 className="highlight__title">3. Lĩnh vực An toàn thông tin</h5>
                    <ul className="mb-0">
                        <li> Trong tháng ghi nhận và xử lý <span>0123</span> (20) sự cố an toàn thông tin (ATTT), tăng (hoặc giảm) 0123% (21) so với tháng trước.</li>
                        <li>Tỷ lệ xử lý ticket lỗ hổng trong hạn trong tháng đạt <span>0123% (số tuyệt đối 0456/ 0789</span> (22), tăng (hoặc giảm) 0123% (23) so với tháng trước.</li>
                        <li>Tỉ lệ số lượng máy chủ đạt tiêu chuẩn ATTTM trên tổng số máy chủ của đơn vị trong tháng đạt <span>0123% (số tuyệt đối 0456/ 0789)</span> (24), tăng (hoặc giảm) <span>0123%</span> (25) so với tháng trước.</li>
                        <li>Lũy kế từ đầu năm tới tháng hiện tại, tỉ lệ số lượng máy chủ đạt tiêu chuẩn ATTTM trên tổng số máy chủ của đơn vị đạt <span>0123% (số tuyệt đối 0456/ 0789)</span> (26), tăng (hoặc giảm) <span>0123%</span> (27) so với tháng trước.</li>
                        <li>Tỉ lệ số lượng máy tính người dùng đạt tiêu chuẩn ATTTM (TC.CNVTQĐ.CNTT.09) trên tổng số máy tính người dùng của đơn vị đạt <span>0123% (số tuyệt đối 0456/ 0789</span> (28), tăng/ giảm <span>0123%</span> (29) so với cùng tháng trước.</li>
                        <li>Lũy kế từ đầu năm tới tháng hiện tại, tỉ lệ số lượng máy tính người dùng đạt tiêu chuẩn ATTTM trên tổng số máy tính người dùng của đơn vị đạt <span> 0123% (số tuyệt đối 0456/ 0789) </span> (30), tăng (hoặc giảm) <span> 0123%</span> (31) so với tháng trước.</li>
                        <p className="mb-0 highlight__noti">[Số liệu tự động đồng bộ với hệ thống của ANM, ngắn hạn chưa tích hợp sẽ chưa đưa vào triển khai].</p>
                    </ul>

                    <h5 className="highlight__title">4. Lĩnh vực phát triển phần mềm CNTT/ Big Data hệ thống dữ liệu</h5>
                    <ul>
                        <li> Về sản phẩm phần mềm CNTT/ hệ thống dữ liệu (Big Data/ Data Lake/ Data Warehouse/ BI Tool):
                            <p>Lũy kế đến tháng hiện tại Đơn vị đang phụ trách phát triển 0123 (32) sản phẩm phần mềm CNTT/ hệ thống dữ liệu. Trong đó trong tháng hiện tại:</p>
                            <div className="listChild">
                                <div className="listChild__item"><div className="d-inline-block text underlineText">Đang thực hiện phát triển mới</div> (bao gồm cả vận hành thử nghiệm) 0123 (33) sản phẩm phần mềm CNTT/ hệ thống dữ liệu.</div>
                                <ul className="checkList">
                                    <li className="checkList__item">Số sản phẩm phần mềm CNTT/ hệ thống dữ liệu chỉ phục vụ đơn vị: <span>0123.</span> (34) Trong đó số hệ thống dữ liệu là: <span>0123</span> (35)</li>
                                    <li className="checkList__item">Số sản phẩm phần mềm CNTT/ hệ thống dữ liệu chỉ phục vụ trong nội bộ Tập đoàn: <span>0123</span>. (36) Trong đó số hệ thống dữ liệu là: <span>0123</span> (37)</li>
                                    <li className="checkList__item">Số sản phẩm phần mềm CNTT/ hệ thống dữ liệu chỉ phục vụ khách hàng Ngoài Tập đoàn: <span>0123</span>. (38) Trong đó số hệ thống dữ liệu là: <span>0123</span> (39)</li>
                                </ul>
                                <div className="listChild__item"><div className="d-inline-block text underlineText">Đưa vào vận hành, sử dụng chính thức và duy trì</div> <span>0123</span> (40) sản phẩm phần mềm CNTT/ hệ thống dữ liệu</div>
                                <ul className="checkList">
                                    <li className="checkList__item">Số sản phẩm phần mềm CNTT/ hệ thống dữ liệu chỉ phục vụ đơn vị: <span>0123</span>. (41) Trong đó số hệ thống dữ liệu là: <span>0123</span> (42</li>
                                    <li className="checkList__item">Số sản phẩm phần mềm CNTT/ hệ thống dữ liệu chỉ phục vụ trong nội bộ Tập đoàn: <span>0123</span>. (43) Trong đó số hệ thống dữ liệu là: <span>0123</span> (44)</li>
                                    <li className="checkList__item">Số sản phẩm phần mềm CNTT/ hệ thống dữ liệu chỉ phục vụ khách hàng Ngoài Tập đoàn: <span>0123</span>. (45) Trong đó số hệ thống dữ liệu là: <span>0123</span> (46)</li>
                                </ul>

                                <div className="listChild__item"><div className="d-inline-block text underlineText">Có điều chỉnh, thay đổi</div> <span>0123</span> (47) sản phầm phần mềm CNTT/ hệ thống dữ liệu</div>
                                <ul className="checkList">
                                    <li className="checkList__item">Số sản phẩm phần mềm CNTT/ hệ thống dữ liệu chỉ phục vụ đơn vị: <span>0123</span>. (48) Trong đó số hệ thống dữ liệu là: <span>0123</span> (49)</li>
                                    <li className="checkList__item">Số sản phẩm phần mềm CNTT/ hệ thống dữ liệu chỉ phục vụ trong nội bộ Tập đoàn: <span>0123</span>. (50) Trong đó số hệ thống dữ liệu là: <span></span> (51)</li>
                                    <li className="checkList__item">Số sản phẩm phần mềm CNTT/ hệ thống dữ liệu chỉ phục vụ khách hàng Ngoài Tập đoàn: <span>0123</span>. (52) Trong đó số hệ thống dữ liệu là: <span>0123</span> (53)</li>
                                </ul>

                                <div className="listChild__item"><div className="d-inline-block text underlineText">Chuyển giao, chấm dứt </div> phụ trách phát triển <span>0123</span> (54) sản phẩm phần mềm CNTT/ hệ thống dữ liệu.</div>
                                <ul className="checkList">
                                    <li className="checkList__item">Số sản phẩm phần mềm CNTT/ hệ thống dữ liệu chỉ phục vụ đơn vị: <span>0123</span>. (55) Trong đó số hệ thống dữ liệu là: <span>0123</span> (56)</li>
                                    <li className="checkList__item">Số sản phẩm phần mềm CNTT/ hệ thống dữ liệu chỉ phục vụ trong nội bộ Tập đoàn: <span>0123</span>. (57) Trong đó số hệ thống dữ liệu là: <span>0123</span> (58)</li>
                                    <li className="checkList__item">Số sản phẩm phần mềm CNTT/ hệ thống dữ liệu chỉ phục vụ khách hàng Ngoài Tập đoàn: <span>0123</span>. (59) Trong đó số hệ thống dữ liệu là: <span>0123</span> (60)</li>
                                </ul>

                                <div className="listChild__item"><div className="d-inline-block text underlineText">Tiếp nhận  </div> phát triển <span>0123</span> (61) sản phẩm phần mềm CNTT/ hệ thống dữ liệu.</div>
                                <ul className="checkList">
                                    <li className="checkList__item">Số sản phẩm phần mềm CNTT/ hệ thống dữ liệu chỉ phục vụ đơn vị: <span>0123</span>. (62) Trong đó số hệ thống dữ liệu là: <span>0123</span> (63)</li>
                                    <li className="checkList__item">Số sản phẩm phần mềm CNTT/ hệ thống dữ liệu chỉ phục vụ trong nội bộ Tập đoàn: <span>0123</span>. (64) Trong đó số hệ thống dữ liệu là: <span>0123</span> (65)</li>
                                    <li className="checkList__item">Số sản phẩm phần mềm CNTT/ hệ thống dữ liệu chỉ phục vụ khách hàng Ngoài Tập đoàn: <span>0123</span>. (66) Trong đó số hệ thống dữ liệu là: <span>0123</span> (67)</li>
                                </ul>
                            </div>
                        </li>

                        <li> Về doanh thu: 
                            <p>0123 (68) sản phẩm phần mềm CNTT/ Big Data có doanh thu. Tổng doanh thu lũy kế tới tháng hiện tại là <span>0123</span> (69) tỷ đồng, tăng (hoặc giảm) <span>0123%</span> (70) so với tháng trước (0123 (71) triệu/tỷ đồng). Trong đó:</p>
                            <div className="listChild">
                                <div className="listChild__item"><span>0123</span> (72) tỷ đồng đến từ các sản phẩm phần mềm CNTT, <span>0123</span> (73) tỷ đồng đến từ các hệ thống dữ liệu;</div>
                                <div className="listChild__item"><span>0123%</span> (số tuyệt đối 0456/ 0789 tỷ đồng) (74) doanh thu đến từ các đơn vị nội bộ trong Tập đoàn, <span>0123% (số tuyệt đối 0456/ 0789)</span> (75) từ các khách hàng ngoài Tập đoàn.</div>
                                
                            </div>
                        </li>

                        <li> Về nỗ lực và chi phí outsource: 
                            <div className="listChild">
                                <div className="listChild__item">Trong tháng tỉ lệ nỗ lực outsource/ nỗ lực nội bộ là <span>xx% (yy/zz)</span> (76)</div>
                                <div className="listChild__item">Lũy kế từ đầu năm tỉ lệ nỗ lực outsource/ nỗ lực nội bộ trong tháng là <span>xx% (yy/zz)</span> (77)</div>
                                <div className="listChild__item">Chi phí outsource trong tháng đạt <span>0123</span> (78) triệu/ tỷ đồng; lũy kế từ đầu năm tới tháng hiện tại đạt <span>0123</span> (79) triệu/ tỷ đồng; đạt <span> 0123% (số tuyệt đối 0123/0123 tỷ đồng)</span> (80) kế hoạch năm đã đặt ra. </div>
                                
                            </div>
                        </li>

                        <li> Về tỉ lệ áp dụng CI/CD:
                            <div className="listChild">
                                <div className="listChild__item">Tỉ lệ sản phẩm phẩm phần mềm CNTT đạt CI/CD từ level 3 trở lên lũy kế tới thời điểm hiện tại đạt 0123% (số tuyệt đối <span>0456/ 0789)</span> (81)
                                    <p>Trong đó: 0123 (82) sản phẩm đạt CI/CD level 3 trở lên trong năm 2023 (83).</p>
                                    </div>
                            </div>
                        </li>

                        <li> Về yêu cầu và lỗi hệ thống:
                            <div className="listChild">
                                <div className="listChild__item">KPI lỗi theo khối lượng công việc trong tháng là <span> … </span>(số lỗi/tổng MM) (84)</div>
                                <ul className="checkList">
                                    <li className="checkList__item checkList__item--round">KPI lỗi theo khối lượng công việc của nội bộ trong tháng là <span>… </span>(số lỗi/tổng MM) (85)</li>
                                    <li className="checkList__item checkList__item--round">KPI lỗi theo khối lượng công việc của OS trong tháng là … (số lỗi/tổng MM) (86)</li>
                                </ul>

                                <div className="listChild__item">KPI lỗi theo khối lượng kloc trong tháng là … (số lỗi/tổng kloc) (87)</div>
                                <ul className="checkList">
                                    <li className="checkList__item checkList__item--round">KPI lỗi theo khối lượng kloc của nội bộ trong tháng là … (số lỗi/tổng kloc) (88)</li>
                                    <li className="checkList__item checkList__item--round">KPI lỗi theo khối lượng kloc của OS trong tháng là … (số lỗi/tổng kloc) (89)</li>
                                </ul>

                                <div className="listChild__item">Tổng số lỗi sau triển khai là … (90), lỗi sau triển khai do OS là … (91)</div>
                                <ul className="checkList">
                                    <li className="checkList__item checkList__item--round">Tỉ lệ xử lý yêu cầu đúng hạn trong tháng đạt 0123% (số tuyệt đối 0456/ 0789) (92). Số ngày trung bình xử lý yêu cầu đạt <span>0123</span> (93) ngày.</li>
                                </ul>
                            </div>
                        </li>
                        <li> Về hoạt động bàn giao vận hành khai thác:
                            <p>Đã bàn giao X hệ thống/tổng số Y hệ thống (94) cần bàn giao hệ thống đã cung cấp dịch vụ cho người dùng cuối </p>
                        </li>

                        <li> Tỷ lệ sản phẩm phần mềm CNTT/ hệ thống dữ liệu tuân thủ đúng quy trình, quy định trong tháng tháng hiện tại đạt 0123% (số tuyệt đối 0456/ 0789) (95.1), cao hơn (hoặc thấp hơn) 0123% (95.2) so với tháng trước đó.
                            <p> (Chi tiết trong Phụ lục 04: Danh sách sản phẩm phần mềm CNTT/ hệ thống dữ liệu)</p>
                        </li>

                    </ul>

                    <h5 className="highlight__title">5. Lĩnh vực Khoa học Dữ liệu, Trí tuệ nhân tạo (Data Science, AI - DSAI)</h5>
                    <ul>
                        <li> Về use-case/ sản phẩm AI: Trong tháng Công ty/ Trung tâm thực hiện phát triển mới 0123 (96) use-case/ sản phẩm AI, lũy kế đang phụ trách phát triển 0456 (97) use-case/ sản phẩm AI. Trong đó 0123% (số tuyệt đối 0456/ 0789) (98) use-case/ sản phẩm AI chỉ phục vụ nội bộ Công ty/ Trung tâm, 0123% (số tuyệt đối 0456/ 0789) (99) use-case/ sản phẩm AI phục vụ các đơn vị nội bộ trong Tập đoàn, 0123% (số tuyệt đối 0456/ 0789) (100) use-case/ sản phẩm AI phục vụ các khách hàng ngoài Tập đoàn. Theo nhóm công nghệ:
                            <div className="listChild">
                                <div className="listChild__item">Xử lý ngôn ngữ tự nhiên (NLP): <span>0123</span> (101) use-case, chiếm 0456% (102)</div>
                                <div className="listChild__item">Thị giác máy tính (CV): <span>0123</span> (103) use-case, chiếm 0456% (104)</div>
                                <div className="listChild__item">Nhận diện mẫu (PR): <span>0123</span> (105) use-case, chiếm 0456% (106)</div>
                                <div className="listChild__item">Robotic: 0123 (107) use-case, chiếm <span>0456%</span> (108)</div>
                            </div>
                        </li>

                        <li>Về doanh thu: 0123 (109) use-case/ sản phẩm AI có doanh thu. Tổng doanh thu trong tháng là 0123 (110) tỷ đồng, tăng (hoặc giảm) 0123% (111) so với tháng trước đó (0123 (112) tỷ đồng). Trong đó <span>0123% (số tuyệt đối 0456/ 0789)</span> (113) từ các đơn vị nội bộ trong Tập đoàn, 0123% (số tuyệt đối 0456/ 0789) (114) từ các khách hàng ngoài Tập đoàn. 
                        </li>
                        <li>Các use case/ sản phẩm AI nổi bật:
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </ReportMonth>
  );
}

export default Template;
