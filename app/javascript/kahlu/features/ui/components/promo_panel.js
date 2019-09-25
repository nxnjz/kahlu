import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Icon from 'kahlu/components/icon';
import { connect } from 'react-redux';
import { me } from '../../../initial_state';

const mapStateToProps = state => {
  return {
    isPro: state.getIn(['accounts', me, 'is_pro']),
  };
};

export default
@connect(mapStateToProps)
class PromoPanel extends React.PureComponent {
  static propTypes = {
    isPro: PropTypes.bool,
  };

  render() {
    const { isPro } = this.props;

    return (
      <div className='wtf-panel promo-panel'>
        <div className='promo-panel__container'>
          {
            !isPro &&
            <div className='promo-panel-item promo-panel-item--highlighted'>
              <a className='promo-panel-item__btn' href='https://pro.kahlu.co'>
                <Icon id='arrow-up' className='promo-panel-item__icon' fixedWidth />
                <FormattedMessage id='promo.kahlu_pro' defaultMessage='Upgrade to KahluPRO' />
              </a>
            </div>
          }

          <div className={`promo-panel-item ${!isPro ? 'promo-panel-item--top-rounded' : ''}`}>
            <a className='promo-panel-item__btn' href='https://news.kahlu.co'>
              <Icon id='align-left' className='promo-panel-item__icon' fixedWidth />
              <FormattedMessage id='promo.kahlu_news' defaultMessage='Kahlu News' />
            </a>
          </div>

          <div className='promo-panel-item'>
            <a className='promo-panel-item__btn' href='https://news.kahlu.co/support'>
              <Icon id='users' className='promo-panel-item__icon' fixedWidth />
              <FormattedMessage id='promo.partners' defaultMessage='Affiliate Partners' />
            </a>
          </div>

          <div className='promo-panel-item'>
            <a className='promo-panel-item__btn' href='https://apps.kahlu.co'>
              <Icon id='th' className='promo-panel-item__icon' fixedWidth />
              <FormattedMessage id='promo.kahlu_apps' defaultMessage='Kahlu Apps' />
            </a>
          </div>
        </div>
      </div>
    )
  }
}