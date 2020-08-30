package response.handlers;

import org.apache.http.HttpEntity;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.ResponseHandler;
import org.apache.http.util.EntityUtils;
import org.json.JSONObject;

public class SuccessAsJSONObject {
    static public ResponseHandler<JSONObject> responseHandler = httpResponse -> { //checks for OK status & returns entity to string if != null
        int status = httpResponse.getStatusLine().getStatusCode();
        if (status >= 200 && status < 300) {
            HttpEntity entity = httpResponse.getEntity();
            return entity != null ? new JSONObject(EntityUtils.toString(entity)) : null;
        } else {
            throw new ClientProtocolException("Unexpected response status: " + status);
        }
    };
}
