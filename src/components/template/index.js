
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
                                    <li className="checkList__item">Số sản phẩm phần mềm CNTT/ hệ thống dữ liệu chỉ phục vụ khách hàng Ngoài Tập đoàn: <span>0123</span>. (45) Trong đó số hệ thống dữ liệu là: <span>0123</span> (46)</li>
                                </ul>

                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </ReportMonth>
  );
}

export default Template;
