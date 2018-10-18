import React from 'react';
import {ShotChart} from "./ShotChart";
import {CountSlider} from "./CountSlider";
import { Radio, Switch, Row, Col } from 'antd';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component{
    state = {
        chartType : "hexbin",
        displayTooltips : true,
    }

    onChartTypeChange = (e) => {
        this.setState({chartType: e.target.value});
    }

    onTooltipsChange = (displayTooltips) => {
        this.setState({displayTooltips});
    }

    render() {
        const {chartType} = this.state;

        return (
            <div className={"data-view"}>
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={2}
                    displayTooltips={true}
                    chartType={"hexbin"}
                />
                <CountSlider />
                <Row>
                    <Col span={8} offset={7}>
                        <RadioGroup onChange={this.onChartTypeChange} value={chartType}>
                            <Radio value={"hexbin"}>Hexbin</Radio>
                            <Radio value={"scatter"}>Scatter</Radio>
                        </RadioGroup>
                    </Col>
                    <Col span={2}>
                        <Switch
                            checkedChildren="On"
                            unCheckedChildren="Off"
                            defaultChecked onChange={this.onTooltipsChange}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}