import { Row, Col, Select, Button } from 'antd';
import { useState } from 'react';

const QueryPanel = ({
    onQuery,
}) => {
    const [query,setQuery] = useState({
        billMonth:'',
        billCurrency:'',
        accountCode:'',
        accountName:'',
        accountDesc:'',
    });
    const handleQuery = () => {
        onQuery(query);
    }
    const handleReset = () => {
        setQuery({
            billMonth:'',
            billCurrency:'',
            accountCode:'',
            accountName:'',
            accountDesc:'',
        })
    }
    const handleChange = (key,value) => {
        setQuery({
            ...query,
            [key]:value,
        })
    }


    return (
        <div>
            <div style={{ maxWidth: 800, margin: '0 auto' }}>
                <Row>
                    <Col span={24}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                            <span style={{ flex: '0 0 25%', textAlign: 'right', paddingRight: 12 }}>账单月份</span>
                            <div style={{ flex: '1 1 75%' }}>
                                <Select
                                    style={{ width: '100%' }}
                                    options={[{ value: '2023-01', label: '2023年1月' },{ value: '2023-02', label: '2023年2月' }]}
                                    value={query.billMonth}
                                    onChange={(value) => handleChange('billMonth',value)}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                            <span style={{ flex: '0 0 25%', textAlign: 'right', paddingRight: 12 }}>账单货币</span>
                            <div style={{ flex: '1 1 75%' }}>
                                <Select
                                    style={{ width: '100%' }}
                                    options={[{ value: 'CNY', label: '人民币' },{ value: 'USD', label: '美元' }]}
                                    value={query.billCurrency}
                                    onChange={(value) => handleChange('billCurrency',value)}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                            <span style={{ flex: '0 0 25%', textAlign: 'right', paddingRight: 12 }}>账户代码</span>
                            <div style={{ flex: '1 1 75%' }}>
                                <Select
                                    style={{ width: '100%' }}
                                    options={[{ value: '001', label: '001' }]}
                                    value={query.accountCode}
                                    onChange={(value) => handleChange('accountCode',value)}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                            <span style={{ flex: '0 0 25%', textAlign: 'right', paddingRight: 12 }}>账户名称</span>
                            <div style={{ flex: '1 1 75%' }}>
                                <Select
                                    style={{ width: '100%' }}
                                    options={[{ value: 'STST1', label: 'STST1' },{ value: 'STST2', label: 'STST2' }]}
                                    value={query.accountName}
                                    onChange={(value) => handleChange('accountName',value)}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                            <span style={{ flex: '0 0 25%', textAlign: 'right', paddingRight: 12 }}>账户描述</span>
                            <div style={{ flex: '1 1 75%' }}>
                                <Select
                                    style={{ width: '100%' }}
                                    options={[{ value: 'desc', label: '描述信息' }]}
                                    value={query.accountDesc}
                                    onChange={(value) => handleChange('accountDesc',value)}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                            <span style={{ flex: '0 0 25%', textAlign: 'right', paddingRight: 12 }}>账单负责人</span>
                            <div style={{ flex: '1 1 75%' }}>
                                <Select
                                    style={{ width: '100%' }}
                                    options={[{ value: 'john', label: 'John Doe' }]}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                            <span style={{ flex: '0 0 25%', textAlign: 'right', paddingRight: 12 }}>状态</span>
                            <div style={{ flex: '1 1 75%' }}>
                                <Select
                                    style={{ width: '100%' }}
                                    options={[
                                        { value: 'pending', label: '待处理' },
                                        { value: 'approved', label: '已批准' }
                                    ]}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div style={{ textAlign: 'right', marginTop: 16 }}>
                            <Button type="primary" style={{ marginRight: 8 }} onClick={handleQuery}>
                                查询
                            </Button>
                            <Button onClick={handleReset}>
                                重置
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default QueryPanel;