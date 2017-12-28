<?php
class TopDelivery {

	private $login = 'webshop';
	private $password = 'pass';
	private $Url = 'http://is-test.topdelivery.ru/api/soap/w/2.0/?wsdl';
	private $Login = 'tdsoap';
	private $Password = '5f3b5023270883afb9ead456c8985ba8';

	public function getClient() {
		return new SoapClient(
			$this->Url,
			array(
				'login' => $this->Login,
				'password' => $this->Password
			)
		);
	}

	function getCitiesRegions() {

		
		$client = $this->getClient();
		$params['auth'] = new stdClass;
		$params['auth']->login = $this->login;
		$params['auth']->password = $this->password;

		$request['getCitiesRegions'] = $params;
		$result = $client->__soapCall('getCitiesRegions', $request);

		if ($result->requestResult->status == 0) {
			$table = array();
			foreach ($result->citiesRegions as $region){
				foreach ($region->cities as $city) {
					if (isset($city->cityId) && isset($city->cityName))
						$table[] = array(
							'cityId' => $city->cityId,
							'cityName' => $city->cityName,
							'regionId' => $region->regionId,
							'regionName' => $region->regionName,
						);
				}
			}
			return $table;
		}

		return array();
	}

	function getNearDeliveryDatesIntervals() {
		$client = self::getClient();
		$params['auth'] = new stdClass;
		$params['auth']->login = $this->login;
		$params['auth']->password = $this->password;


		$params['addressDeliveryProperties'] = array(
			'serviceType' => 'DELIVERY',
			'deliveryType' => 'COURIER',
			'orderSubtype' => 'SIMPLE',
			'deliveryAddress' => array()
		);

		$request['getNearDeliveryDatesIntervals']=$params;
		$result = $client->__soapCall('getNearDeliveryDatesIntervals', $request);

		return $result;
	}
}

